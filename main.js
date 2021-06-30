canvas=document.getElementById('mycanvas');
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
background_image="racing.jpg";
rover_image="car1.png";
rover_x=10;
rover_y=10;
function add(){
background_img=new Image();
background_img.onload=uploadBackground;
background_img.src=background_image;
rover_img=new Image();
rover_img.onload=uploadRover;
rover_img.src=rover_image;
}
function uploadBackground(){
ctx.drawImage(background_img,0,0,canvas.width,canvas.height);
}
function uploadRover(){
    ctx.drawImage(rover_img,rover_x,rover_y,rover_width,rover_height);
    }
    window.addEventListener("keydown",my_keydown);
    function my_keydown(e){
        keypress=e.keyCode;
        if(keypress=='38'){
            up();
        }
        if(keypress=='40'){
            down();
        }
        if(keypress=='37'){
            left();
        }
        if(keypress=='39'){
        right();
        }
    }
    function up(){
        if(rover_y>=0){
            rover_y=rover_y-10;
            console.log("when up arrow is pressed x="+rover_x+"y="+rover_y);
            uploadBackground();
            uploadRover();
            
        }
    }
    function down(){
        if(rover_y<=500){
            rover_y=rover_y+10;
            console.log("when up arrow is pressed x="+rover_x+"y="+rover_y);
            uploadBackground();
            uploadRover();
            
        }
    }
    function left(){
        if(rover_x>=0){
            rover_x=rover_x-10;
            console.log("when up arrow is pressed x="+rover_x+"y="+rover_y);
            uploadBackground();
            uploadRover();
            
        }
    }
    function right(){
        if(rover_x<=700){
            rover_x=rover_x+10;
            console.log("when up arrow is pressed x="+rover_x+"y="+rover_y);
            uploadBackground();
            uploadRover();
            
        }
    }