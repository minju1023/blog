<?php

namespace App\Http\Requests;

use App\Service\Dto\UserDto;
use Carbon\Carbon;
use Illuminate\Foundation\Http\FormRequest;

class CreateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'     => 'required',
            'email'    => 'required',
            'password' => 'required',
            'birthday' => 'required|date ',

        ];
    }

    public function toUserDto()
    {
        return new UserDto(
          $this->get('name'),
          $this->get('email'),
          $this->get('password'),
          $this->has('birthday') ? Carbon::parse($this->get('birthday')) : null
        );
    }
}
