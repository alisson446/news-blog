<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\News;

class NewsController extends Controller
{

    public function store(Request $request)
    {
        $news = new News();
        $news->fill($request->all());
        $news->save();

        return response()->json($news, 201);
    }

    public function index()
    {
        $news = News::get();
        return response()->json($news);
    }

    public function show($id)
    {
        $news = News::find($id);

        if(!$news) {
            return response()->json([
                'message'   => 'Record not found',
            ], 404);
        }

        return response()->json($news);
    }

    public function update(Request $request, $id)
    {
        $news = News::find($id);

        if(!$news) {
            return response()->json([
                'message'   => 'Record not found',
            ], 404);
        }

        $news->fill($request->all());
        $news->save();

        return response()->json($news);
    }

    public function destroy($id)
    {
        $news = News::find($id);

        if(!$news) {
            return response()->json([
                'message'   => 'Record not found',
            ], 404);
        }

        $news->delete();
    }
}
