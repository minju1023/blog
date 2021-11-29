<?php

namespace App\Service\Dto;

use Carbon\Carbon;

class UserSearchParam
{

    private $name;
    private $email;
    private $bornAfter;
    private $bornBefore;
    private $page;
    private $size;
    private $sortRules;

    public function __construct(
        string $name = null,
        string $email = null,
        Carbon $bornAfter = null,
        Carbon $bornBefore = null,
        int    $page = null,
        int    $size = null,
        array  $sortRules = null)
    {
        $this->name = $name;
        $this->email = $email;
        $this->bornAfter = $bornAfter;
        $this->bornBefore = $bornBefore;
        $this->page = $page;
        $this->size = $size;

    }

    /**
     * @return string|null
     */
    public function getName(): ?string
    {
        return $this->name;
    }

    /**
     * @return string|null
     */
    public function getEmail(): ?string
    {
        return $this->email;
    }

    /**
     * @return Carbon|null
     */
    public function getBornAfter(): ?Carbon
    {
        return $this->bornAfter;
    }

    /**
     * @return Carbon|null
     */
    public function getBornBefore(): ?Carbon
    {
        return $this->bornBefore;
    }

    /**
     * @return int|null
     */
    public function getPage(): ?int
    {
        return $this->page;
    }

    /**
     * @return int|null
     */
    public function getSize(): ?int
    {
        return $this->size;
    }

    /**
     * @return mixed
     */
    public function getSortRules()
    {
        return $this->sortRules;
    }

}
