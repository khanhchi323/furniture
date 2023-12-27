<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    protected $table = 'user';
    protected $fillable = ['user_id', 'type_account_id',
     'username', 'email','email_verified_at','password',
     'remember_token', 'avt_image', 'first_name', 'last_name', 'telephone', 'created_at', 'modified_at'];

    protected $primaryKey = 'user_id';

    protected $hidden = [
        'password',
        'remember_token'
        
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    // public function tokens()
    // {
    //     return $this->hasMany(PersonalAccessToken::class);
    // }


    // Trong model User.php
    // protected static function boot()
    // {
    //     parent::boot();

    //     static::created(function ($user) {
    //         $user->updated_at = now();
    //         $user->save();
    //     });
    // }


    // public function user_address()
    // {
    //     return $this->hasMany(user_address::class, 'user_id', 'user_id');
    // }
}