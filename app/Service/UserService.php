<?php

namespace App\Service;

use App\Http\Requests\CreateUserRequest;
use App\Http\Requests\ListUsersRequest;
use App\Models\User;
use App\Service\Dto\UserDto;
use App\Service\Dto\UserSearchParam;
use Carbon\Carbon;

class UserService
{
    public function createUser(UserDto $dto)
    {
        User::create([
            'name'     => $dto->getName(),
            'email'    => $dto->getEmail(),
            'password' => \Hash::make($dto->getBirthday()),
            'birthday' => $dto->getBirthday(),
        ]);

    }

    public function listUsers(UserSearchParam $param)
    {
        $query = User::query(); // eloquent 의 builder 타입
        $this->applySearchParam($query, $param);
        $this->applySortRule($query, $param);

        return $query->paginate($param->getSize(), ['*'], 'page', $param->getPage() );
    }

    /**
     * @param int $userId
     * @return User
     */
    public function findById(int $userId)
    {
        return User::findOrFail($userId);
    }


    private function isNotEmpty($value) : bool
    {
        return mb_strlen($value) > 0;
    }


    private function applySearchParam(\Illuminate\Database\Eloquent\Builder $query, UserSearchParam $param)
    {
        $name = $param->getName();
        if($this->isNotEmpty($name)) {
            $query->where('name', 'like' , '%'.$name.'%');
        }

        $email = $param->getEmail();
        if($this->isNotEmpty($email)) {
            $query->where('email', 'like' , '%'.$email.'%');
        }

        $bornAfter = $param->getBornAfter();
        if($bornAfter != null) { // 문자가아니라 carbon 객체라서 isNotEmpty 사용x
            $query->where('birthday', '>=', $bornAfter->startOfDay());
        }
        $bornBefore = $param->getBornBefore();
        if($bornBefore != null) { // 문자가아니라 carbon 객체라서 isNotEmpty 사용x
            $query->where('birthday', '<=', $bornBefore->endOfDay());
        }
    }

    private function applySortRule(\Illuminate\Database\Eloquent\Builder $query, UserSearchParam $param)
    {
        /** @var SortRule[] $rules */
        $rules = $param->getSortRules();
        if($rules != null) {
            foreach($rules as $rule) {
                $query->orderBy($rule->getSortKey(), $rule->getSortDirection());
            }
        }
    }

    public function updateUser(int $userId, UserDto $dto)
    {
        $user = $this->findById($userId);

        $name = $dto->getName();
        if($name != null) {
            $user->name = $name;
        }

        $birthday = $dto->getBirthday();
        if($birthday != null) {
            $user->birthday = $birthday;
        }
        $user->save();
    }


}

