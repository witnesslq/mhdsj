<!Doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="ECharts-X">
    <meta name="author" content="shenyi.914@gmail.com">
    <title>ECharts-X</title>

    <link rel="shortcut icon" href="img/favicon.png">

    <link rel="stylesheet" href="css/common.css">
    <link rel="stylesheet" href="css/index.css">
    <body>
        <header id="header">
            <h1><a href="index.html">ECharts-X</a></h1>
            <ul class="links">
                <li>
                    <a href="cn/article/getting_started.html" target="_blank">Documentation</a>
                </li>
                <li><a href="example.html" target="_blank">Examples</a></li>
                <li><a href="https://github.com/ecomfe/echarts-x/" target="_blank">Github</a></li>
                <li><a href="http://echarts.baidu.com/" target="_blank">ECharts</a></li>
            </ul>
        </header>

        <main id="main">
            <div id="masthead">
                <img class="thumb" src="img/logo.png" alt="">
                <p class="desc">
                    Extension pack of ECharts providing globe visualization and 3d plots
                </p>
                <a class="download" href="http://echarts.baidu.com/x/build/echarts-x-0.2.0.zip">DOWNLOAD v0.2</a>
                
                <div class="github-status">
                    <iframe src="https://ghbtns.com/github-btn.html?user=ecomfe&repo=echarts-x&type=star&count=false&size=large" frameborder="0" scrolling="0" width="80px" height="30px"></iframe>

                    <iframe src="https://ghbtns.com/github-btn.html?user=ecomfe&repo=echarts-x&type=fork&count=false&size=large" frameborder="0" scrolling="0" width="80px" height="30px"></iframe>
                </div>
            </div>
        </main>

        <!-- import: footer -->

        <script src="lib/esl.js"></script>
        <script src="lib/jquery.min.js"></script>

        <script>
            $(window).load(function () {
                var canvas = document.createElement('canvas');
                if (!canvas.getContext) {
                    return;
                }
                var $clipImage = $('#masthead .thumb');
                canvas.width = $clipImage.width();
                canvas.height = $clipImage.height();
                canvas.className = 'thumb';

                var ctx = canvas.getContext('2d');
                if (ctx.globalCompositeOperation == null) {
                    return;
                }

                var bgImage = new Image();

                bgImage.onload = function () {
                    var cx = bgImage.width / 2;
                    var cy = bgImage.height / 2;
                    var angle = 0;

                    function draw() {
                        angle += 0.002;
                        cx = 400 * Math.cos(angle) + 500;
                        cy = 200 * Math.sin(angle) + 250;

                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        ctx.save();
                        ctx.drawImage($clipImage[0], 0, 0, canvas.width, canvas.height);
                        ctx.globalCompositeOperation = 'source-in';
                        ctx.drawImage(bgImage, -cx, -cy);

                        ctx.restore();
                        ctx.save();
                        ctx.globalAlpha = 0.6;
                        ctx.drawImage($clipImage[0], 0, 0, canvas.width, canvas.height);
                        ctx.restore();
                    }
                    draw();

                    $clipImage.replaceWith(canvas);
                    setInterval(draw, 50);
                }
                bgImage.src = 'example/asset/background.jpg';

                // Mouse move effect
                $('#main').mousemove(function (e) {
                    var deg = (e.clientX - $(window).width() / 2) / 80;
                    $('#masthead').css('transform', 'rotateY(' + deg + 'deg)');
                    $('#main').css('background-position', (-deg * 7 - 200) +  'px -100px');
                });
            });

        </script>
    </body>
</head>
</html>