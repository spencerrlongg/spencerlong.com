<!DOCTYPE html>
@extends('layouts.app')
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <body>
@section('content')
<div id="app"></div>
@endsection
</body>
</html>
