<?php

require __DIR__ . '/../../vendor/autoload.php';

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

use Slim\Factory\AppFactory;
$app = AppFactory::create();

//$app->add(new \Tuupola\Middleware\CorsMiddleware);

/* Fake APIs */
$app->get('/api/fake/posts', function (Request $request, Response $response, array $args) {
    $response->getBody()->write((string)json_encode([
        [
            'id' => 1,
            'title' => 'How to make an ASCII game engine',
            'description' => 'ASCII art is a lot of fun, in this post you will learn how to make a text-based ASCII game',
            'date' => '2021-07-25',
            'image' => 'https://gfascii.art/wp-content/uploads/2019/10/Mario-and-Yoshi-1024x617.png'
        ],
        [
            'id' => 2,
            'title' => 'Do we really need CRT lib for small programs?',
            'description' => 'Using the C runtime library is not always a good idea, especially when you are developing a small application',
            'date' => '2021-07-26',
            'image' => 'https://borncity.com/win/wp-content/uploads/sites/2/2017/06/MFVCR100-dll_thumb.jpg'
        ],
    ]));
    return $response->withHeader('Content-Type', 'application/json');
});

$app->get('/api/fake/posts/{id}', function (Request $request, Response $response, array $args) {
    $post = [];
    if ($args['id'] == 1) {
        $post = [
            'id' => 1,
            'title' => 'How to make an ASCII game engine',
            'description' => 'ASCII art is a lot of fun, in this post you will learn how to make a text-based ASCII game',
            'date' => '2021-07-25',
            'image' => 'https://gfascii.art/wp-content/uploads/2019/10/Mario-and-Yoshi-1024x617.png',
            'body' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br><br><b>Why do we use it?</b><br><br>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).<br><br><b>Where does it come from?</b><br><br>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.<br><br>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.<br><br><b>Where can I get some?</b><br><br>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.<br><br>',
      ];
    } else if ($args['id'] == 2) {
        $post = [
            'id' => 2,
            'title' => 'Do we really need CRT lib for small programs?',
            'description' => 'Using the C runtime library is not always a good idea, especially when you are developing a small application',
            'date' => '2021-07-26',
            'image' => 'https://borncity.com/win/wp-content/uploads/sites/2/2017/06/MFVCR100-dll_thumb.jpg'
            'body' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br><br><b>Why do we use it?</b><br><br>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).<br><br><b>Where does it come from?</b><br><br>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.<br><br>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.<br><br><b>Where can I get some?</b><br><br>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.<br><br>',
        ];
    } else {
        // Cannot find the post
    }
    $response->getBody()->write((string)json_encode($post));
    return $response->withHeader('Content-Type', 'application/json');
});

$app->run();
