<?php

namespace App\Http\Controllers;

use App\Utilities\ProxyRequest;
use Illuminate\Http\Request;
use Monolog\Handler\StreamHandler;
use Monolog\Logger as Logger;

class AuthController extends Controller
{
    //
    protected $proxy;

    public function __construct(ProxyRequest $proxy) {
        $this->proxy = $proxy;
        $this->logger = new Logger('AuthController');
        $this->logger->pushHandler(new StreamHandler(storage_path().'/logs/Auth/AuthController.log',Logger::INFO));
    }}
