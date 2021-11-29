<?php

namespace App\Service\Dto;

class SortRule
{
    private $sortKey;
    private $sortDirection;

    /**
     * @param $sortKey
     * @param $sortDirection
     */
    public function __construct($sortKey, $sortDirection)
    {
        $this->sortKey = $sortKey;
        $this->sortDirection = $sortDirection;
    }

    /**
     * @return mixed
     */
    public function getSortKey()
    {
        return $this->sortKey;
    }

    /**
     * @return mixed
     */
    public function getSortDirection()
    {
        return $this->sortDirection;
    }


}
