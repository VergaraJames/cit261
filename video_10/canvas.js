function start() {
    var canvas = document.getElementById('block');

    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        // drawing code here
        ctx.fillStyle = 'rgba(4, 47, 33, 0.7)';
        ctx.fillRect(30, 30, 50, 50);

        ctx.fillStyle = 'rgba(109, 22, 60, 0.7)';
        ctx.fillRect(50, 50, 50, 50);
    }

    var canvas = document.getElementById('smile');

    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        // drawing code here
        ctx.beginPath();
        ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
        ctx.moveTo(110, 75);
        ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
        ctx.moveTo(65, 65);
        ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
        ctx.moveTo(95, 65);
        ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
        ctx.strokeStyle = '#2c7c83';
        ctx.lineWidth = 3;
        ctx.stroke();
    }

    var canvas = document.getElementById('svg');
    var svg = canvas.getContext('2d');
    var path = new Path2D('M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z');
    svg.fillStyle = '#c50b59';
    svg.shadowOffsetX = 2;
    svg.shadowOffsetY = 2;
    svg.shadowBlur = 2;
    svg.shadowColor = '#10182a';
    svg.fill(path);


    //text
    var txt = document.getElementById('text').getContext('2d');
    txt.font = '42px serif';
    //create gradient
    var lineargrad = txt.createLinearGradient(0, 0, 150, 100);
    lineargrad.addColorStop(0, '#eef570');
    lineargrad.addColorStop(0.5, '#8a42aa');
    lineargrad.addColorStop(1, '#301629');
    //use gradient in text
    txt.fillStyle = lineargrad;
    txt.fillText('Canvas', 15, 85);


    //picture of J.C.
    var pic = document.getElementById('picture').getContext('2d');
    var img = new Image();
    img.onload = function() {
        pic.drawImage(img, 0, 0);
    };
    img.src = 'images/jesus.png';


} //end start