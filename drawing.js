fire = class 
{
    constructor (x, y, pos_x, pos_y, r)
    {
        this.active = 0;// 0 - it damages; 1 - damages near units at one 'for'; 2 - doesn't active
        this.who_is_it = 2;
        this.x = x;
        this.y = y;                               
        this.animation_walk = 0;
        this.x1_func = unit[0].object_x;
        this.y1_func = unit[0].object_y;                
        this.object_x = x + pos_x ;//where is he
        this.object_y = y + pos_y;//where is he                     
        this.target_y = y / 11 ;
        this.light = screen_w * 0.2;
        this.radius = r + screen_w * 0.005;
        //this.enemy = x / 2;
        this.life = 4;
        this.direct = -1;
        this.damage = z / 1100;          
    }
    draw()
    {
        ctx.globalCompositeOperation="destination-over";                        
        this.life--;                                             
        ctx.beginPath();
        ctx.fillStyle = "orange";
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI, false);
        ctx.fill();
        ctx.closePath();            
    }                          
}
hero = class
{
    constructor (x, y, pos_x, pos_y)
    {
        this.who_is_it = 0;
        this.x = x;
        this.y = y;
        this.move_x = pos_x;
        this.move_y = pos_y;
        this.animation_walk = 0;
        this.step = true;
        this.light = screen_h * 0.4;
        this.light_y = screen_h * 0.4;
        this.light_x = screen_w * 0.2;
        this.object_x = x + pos_x;//where is he
        this.object_y = y + y / 11 + pos_y;//where is he
        this.target_x = 1;
        this.target_y = y / 11 * 1.1;
        this.radius = x / 30;
        this.direct = 1;   
        this.life = 10;
        this.take_damage = 10;   
        this.hp = 0.074;
        this.mp = 0.074;
    }
    vision()
    {
        ctx.clearRect(unit[0].object_x - screen_w * 0.1,   unit[0].object_y - screen_h * 0.26, unit[0].light_x,        unit[0].light_y * 1.45);
        ctx.clearRect(unit[0].object_x - screen_w * 0.106, unit[0].object_y - screen_h * 0.25, unit[0].light_x * 1.06, unit[0].light_y * 1.4);
        ctx.clearRect(unit[0].object_x - screen_w * 0.112, unit[0].object_y - screen_h * 0.24, unit[0].light_x * 1.12, unit[0].light_y * 1.35);
        ctx.clearRect(unit[0].object_x - screen_w * 0.118, unit[0].object_y - screen_h * 0.23, unit[0].light_x * 1.18, unit[0].light_y * 1.3);
        ctx.clearRect(unit[0].object_x - screen_w * 0.124, unit[0].object_y - screen_h * 0.22, unit[0].light_x * 1.24, unit[0].light_y * 1.25);
        ctx.clearRect(unit[0].object_x - screen_w * 0.13,  unit[0].object_y - screen_h * 0.21, unit[0].light_x * 1.3,  unit[0].light_y * 1.2);
        ctx.clearRect(unit[0].object_x - screen_w * 0.136, unit[0].object_y - screen_h * 0.2,  unit[0].light_x * 1.36, unit[0].light_y * 1.15);
    }
    draw()
    {                
        ctx.globalCompositeOperation="destination-over"; 
        /*ctx.beginPath(); // check our target body and head
        ctx.fillStyle = "black";                               
        ctx.arc(this.object_x, this.object_y, this.radius, 0, 2*Math.PI, false);                
        ctx.fill();                
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(this.object_x, this.object_y + this.target_y, this.radius, 0, 2*Math.PI, false);                
        ctx.fill();
        ctx.closePath();*/
        if (this.take_damage < 10) this.take_damage--;             
        if (this.take_damage == 0) this.take_damage = 10;
        
        ctx.beginPath();//HP MP R menu
        ctx.lineWidth = screen_w / 1000;
        ctx.fillStyle = "green";
        ctx.fillRect(this.x * 0.9625 + this.move_x, this.y * 0.935 + this.move_y , this.x * this.hp, this.y / 60);
        ctx.fillStyle = "red";
        ctx.fillRect(this.x * 0.9625 + this.move_x, this.y * 0.935 + this.move_y , this.x *0.074, this.y / 60);

        ctx.fillStyle = "black";
        ctx.rect(this.x * 0.9625 + this.move_x, this.y * 0.957 + this.move_y , this.x * 0.074 * 0.25, this.y / 60)
        ctx.rect(this.x * 0.9625 + this.move_x + this.x * 0.074 * 0.25, this.y * 0.957 + this.move_y , this.x * 0.074 * 0.25, this.y / 60)
        ctx.rect(this.x * 0.9625 + this.move_x + this.x * 0.074 * 0.5, this.y * 0.957 + this.move_y , this.x * 0.074 * 0.25, this.y / 60)
        ctx.rect(this.x * 0.9625 + this.move_x + this.x * 0.074 * 0.75, this.y * 0.957 + this.move_y , this.x * 0.074 * 0.25, this.y / 60)
        //ctx.rect(this.x * 0.9625 + this.move_x, this.y * 0.957 + this.move_y , this.x * this.mp / 3, this.y / 60)
        //ctx.rect(this.x * 0.9625 + this.move_x, this.y * 0.957 + this.move_y , this.x * this.mp / 2, this.y / 60)
        //ctx.rect(this.x * 0.9625 + this.move_x, this.y * 0.957 + this.move_y , this.x * this.mp / 4, this.y / 60)
        ctx.stroke();

        ctx.fillStyle = "blue";
        ctx.fillRect(this.x * 0.9625 + this.move_x, this.y * 0.957 + this.move_y , this.x * this.mp, this.y / 60);
        ctx.fillStyle = "red";
        ctx.fillRect(this.x * 0.9625 + this.move_x, this.y * 0.957 + this.move_y , this.x *0.074, this.y / 60);

        ctx.fillStyle = "black";
        ctx.fillRect(this.x * 0.96 + this.move_x, this.y * 0.93 + this.move_y , this.x *0.079, this.y / 20);                
                        
        ctx.closePath();

        ctx.fillStyle = "aqua";
        ctx.fillRect(this.x * 0.947 + this.move_x, this.y * 0.958 + this.move_y , this.x * 0.09 * 0.1, this.y * 0.015);
        ctx.fillStyle = "orange";
        ctx.fillRect(this.x * 0.947 + this.move_x, this.y * 0.934 + this.move_y , this.x * 0.09 * 0.1, this.y * 0.015);
        ctx.fillStyle = "black";
        if (Keys.freez) ctx.fillRect(this.x * 0.945 + this.move_x, this.y * 0.955 + this.move_y , this.x * 0.14 * 0.1, this.y * 0.023);
        else ctx.fillRect(this.x * 0.945 + this.move_x, this.y * 0.93 + this.move_y , this.x * 0.14 * 0.1, this.y * 0.023);

        if (!Keys.mouse)//doesn't atack
        {
            ctx.beginPath()//arm with scipitor 
            if (this.take_damage < 10) ctx.fillStyle = "rgb(116, 98, 113)";
            else ctx.fillStyle = "rgb(201, 171, 196)";
            ctx.arc(this.x * (1 + 0.036 * this.direct)  + this.move_x, this.y* 1.2 + this.move_y, this.x / 150, 0, 2*Math.PI, false)
            ctx.fill();
            ctx.closePath();     

            ctx.beginPath();//scipitor
            ctx.strokeStyle = "black";
            ctx.lineWidth = this.x / 300;
            ctx.moveTo(this.x * (1 + 0.03 * this.direct) + this.move_x, this.y * 1.25 + this.move_y);
            ctx.lineTo(this.x * (1 + 0.05 * this.direct) + this.move_x, this.y * 1.1 + this.move_y);
            ctx.stroke();
            ctx.moveTo(this.x * (1 + 0.06 * this.direct) + this.move_x, this.y * 1.09 + this.move_y)
            ctx.bezierCurveTo(this.x * (1 + 0.02 * this.direct) + this.move_x, this.y * 1.15 + this.move_y, this.x * (1 + 0.05 * this.direct) + this.move_x, this.y + this.move_y, this.x * (1 + 0.06 * this.direct) + this.move_x, this.y * 1.03 + this.move_y);
            ctx.stroke();
            ctx.closePath();      
        }
        else//atacks
        {
            ctx.beginPath()//arm with scipitor 
            if (this.take_damage < 10) ctx.fillStyle = "rgb(116, 98, 113)";
            else ctx.fillStyle = "rgb(201, 171, 196)";
            ctx.arc(this.x * (1 + 0.036 * this.direct)  + this.move_x, this.y* 1.13 + this.move_y, this.x / 150, 0, 2*Math.PI, false)
            ctx.fill();
            ctx.closePath();     

            ctx.beginPath();//scipitor
            ctx.strokeStyle = "black";
            ctx.lineWidth = this.x / 300;
            ctx.moveTo(this.x * (1 + 0.03 * this.direct) + this.move_x, this.y * 1.18 + this.move_y);
            ctx.lineTo(this.x * (1 + 0.05 * this.direct) + this.move_x, this.y * 1.03 + this.move_y);
            ctx.stroke();
            ctx.moveTo(this.x * (1 + 0.06 * this.direct) + this.move_x, this.y * 1.02 + this.move_y)
            ctx.bezierCurveTo(this.x * (1 + 0.02 * this.direct) + this.move_x, this.y * 1.08 + this.move_y, this.x * (1 + 0.05 * this.direct) + this.move_x, this.y * 0.92 + this.move_y, this.x * (1 + 0.06 * this.direct) + this.move_x, this.y * 0.96 + this.move_y);
            ctx.stroke();
            ctx.closePath();
            if (this.mp >= 0.074 * 0.25)  
            {
                ctx.beginPath();
                if (Keys.freez)
                {
                    if (this.take_damage < 10) ctx.fillStyle = "rgb(0, 110, 110)";
                    else ctx.fillStyle = 'aqua';    
                }
                else 
                {
                    if (this.take_damage < 10) ctx.fillStyle = "rgb(161, 105, 0)";
                    else ctx.fillStyle = 'orange';
                }
                
                ctx.arc(this.x * (1 + 0.05 * this.direct) + this.move_x, this.y * 1.01 + this.move_y, this.x / 150, 0, 2*Math.PI, false);
                ctx.fill();
                if (Keys.freez)
                {
                    if (this.take_damage < 10) ctx.fillStyle = "rgb(161, 105, 0)";
                    else ctx.fillStyle = 'orange';
                }
                else
                {
                    if (this.take_damage < 10) ctx.fillStyle = "rgb(0, 110, 110)";
                    else ctx.fillStyle = 'aqua';        
                }
                ctx.arc(this.x * (1 + 0.05 * this.direct) + this.move_x, this.y * 1.01 + this.move_y, this.x / 80, 0, 2*Math.PI, false);
                ctx.fill();
                ctx.closePath();    
            }    
            
        }                
        
        ctx.beginPath()//arm with flashlight 
        if (this.take_damage < 10) ctx.fillStyle = "rgb(116, 98, 113)";
        else ctx.fillStyle = "rgb(201, 171, 196)";
        ctx.arc(this.x* (1 + 0.005 * this.direct) + this.move_x, this.y* 1.2 + this.move_y, this.x / 150, 0, 2*Math.PI, false)
        ctx.fill();
        ctx.closePath();
        
        ctx.beginPath();//flashlight
        ctx.moveTo(this.x * (1 + 0.005 * this.direct) + this.move_x, this.y* 1.17 + this.move_y);
        ctx.lineWidth = this.x / 100;
        ctx.lineTo(this.x * (1 + 0.005 * this.direct) + this.move_x, this.y* 1.2 + this.move_y)
        ctx.stroke();
        ctx.closePath();                
        ctx.beginPath();
        ctx.lineWidth = this.x / 300;
        if (this.take_damage < 10) ctx.fillStyle = "rgb(170, 170, 0)";
        else ctx.fillStyle = "yellow";
        ctx.moveTo(this.x * (1 + 0.005 * this.direct) + this.move_x, this.y* 1.2 + this.move_y);
        ctx.lineTo(this.x * (1 - 0.01 * this.direct) + this.move_x, this.y* 1.23 + this.move_y);
        ctx.lineTo(this.x * (1 + 0.025 * this.direct) + this.move_x, this.y* 1.23 + this.move_y);
        ctx.lineTo(this.x * (1 + 0.005 * this.direct) + this.move_x, this.y* 1.2 + this.move_y);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();//eye
        ctx.lineWidth = 2;        
        ctx.strokeStyle = "black";
        ctx.moveTo(this.x * (1 - 0.01 * this.direct) + this.move_x, this.y * 1.08 + this.move_y);
        ctx.bezierCurveTo(this.x * (1- 0.0001 * this.direct) + this.move_x, this.y * 1.1124 + this.move_y, this.x * (1 + 0.0098 * this.direct) + this.move_x, this.y * 1.08 + this.move_y, this.x * (1 - 0.01 * this.direct) + this.move_x, this.y * 1.08 + this.move_y);        
        ctx.stroke();  
        ctx.moveTo(this.x * (1 + 0.01 * this.direct) + this.move_x, this.y * 1.097 + this.move_y);
        ctx.bezierCurveTo(this.x * (1 + 0.02 * this.direct) + this.move_x, this.y * 1.09 + this.move_y, this.x * (1 + 0.013 * this.direct) + this.move_x, this.y * 1.07 + this.move_y, this.x * (1 + 0.01 * this.direct) + this.move_x, this.y * 1.097 + this.move_y);        
        ctx.stroke();                     
        ctx.strokeStyle = "black";
        if (this.take_damage < 10) ctx.fillStyle = "rgb(0, 110, 110)";
        else ctx.fillStyle = 'aqua';
        ctx.fill();
        
        ctx.beginPath();//hair forward
        ctx.lineWidth = 2;        
        ctx.strokeStyle = "black";                   
        ctx.moveTo(this.x + this.move_x, this.y + this.move_y);
        ctx.bezierCurveTo(this.x * (1 + 0.06 * this.direct) + this.move_x, this.y * 0.97 + this.move_y, this.x * (1 + 0.04 * this.direct) + this.move_x, this.y * 1.12 + this.move_y, this.x * (1 + 0.03 * this.direct) + this.move_x, this.y *1.14 + this.move_y);
        ctx.stroke();
        ctx.moveTo(this.x + this.move_x, this.y + this.move_y);
        ctx.bezierCurveTo(this.x * (1 - 0.03 * this.direct) + this.move_x, this.y * 0.97 + this.move_y, this.x * (1 - 0.05 * this.direct) + this.move_x, this.y * 1.12 + this.move_y, this.x * (1 - 0.02 * this.direct) + this.move_x, this.y *1.12 + this.move_y);
        ctx.bezierCurveTo(this.x * (1 + 0.02 * this.direct) + this.move_x, this.y * 0.97 + this.move_y, this.x * (1 + 0.01 * this.direct) + this.move_x, this.y * 1.12 + this.move_y, this.x * (1 + 0.03 * this.direct) + this.move_x, this.y *1.14 + this.move_y);
        ctx.stroke();
        if (this.take_damage < 10) ctx.fillStyle = "rgb(10, 122, 0)";
        else ctx.fillStyle = "rgb(32, 199, 17)";
        ctx.fill();
        ctx.closePath();   

        ctx.beginPath();//hair forward
        ctx.lineWidth = 2;        
        ctx.strokeStyle = "black";                   
        ctx.moveTo(this.x + this.move_x, this.y + this.move_y);
        ctx.bezierCurveTo(this.x * (1 - 0.06 * this.direct) + this.move_x, this.y * 0.97 + this.move_y, this.x * (1 - 0.04 * this.direct) + this.move_x, this.y * 1.12 + this.move_y, this.x * (1 - 0.03 * this.direct) + this.move_x, this.y *1.14 + this.move_y);
        ctx.stroke();
        ctx.moveTo(this.x + this.move_x, this.y + this.move_y);
        ctx.bezierCurveTo(this.x * (1 + 0.03 * this.direct) + this.move_x, this.y * 0.97 + this.move_y, this.x * (1 + 0.05 * this.direct) + this.move_x, this.y * 1.12 + this.move_y, this.x * (1 + 0.02 * this.direct) + this.move_x, this.y *1.12 + this.move_y);
        ctx.bezierCurveTo(this.x * (1 - 0.02 * this.direct) + this.move_x, this.y * 0.97 + this.move_y, this.x * (1 - 0.01 * this.direct) + this.move_x, this.y * 1.12 + this.move_y, this.x * (1 - 0.03 * this.direct) + this.move_x, this.y *1.14 + this.move_y);
        ctx.stroke();
        if (this.take_damage < 10) ctx.fillStyle = "rgb(10, 122, 0)";
        else ctx.fillStyle = "rgb(32, 199, 17)";
        ctx.fill();
        ctx.closePath();                               
    
        ctx.beginPath();//head
        ctx.lineWidth = 2;        
        ctx.strokeStyle = "black";                   
        ctx.moveTo(this.x + this.move_x, this.y + this.move_y);
        ctx.bezierCurveTo(this.x * (1 + 0.05 * this.direct) + this.move_x, this.y * 1.02 + this.move_y, this.x * (1 + 0.04 * this.direct) + this.move_x, this.y * 1.12 + this.move_y, this.x + this.move_x, this.y *1.16 + this.move_y);                            
        ctx.stroke();
        ctx.moveTo(this.x + this.move_x, this.y + this.move_y);
        ctx.bezierCurveTo(this.x * (1 - 0.05 * this.direct) + this.move_x, this.y * 1.02 + this.move_y, this.x * (1 - 0.04 * this.direct) + this.move_x, this.y * 1.12 + this.move_y, this.x + this.move_x, this.y * 1.16 + this.move_y);
        ctx.stroke();
        if (this.take_damage < 10) ctx.fillStyle = "rgb(116, 98, 113)";
        else ctx.fillStyle = "rgb(201, 171, 196)";
        ctx.fill();
        ctx.closePath();    
        
        ctx.beginPath()//body
        ctx.lineWidth = 2;        
        ctx.strokeStyle = "black";
        ctx.moveTo(this.x + this.move_x, this.y * 1.1 + this.move_y);
        ctx.bezierCurveTo(this.x * (1 - 0.1 * this.direct) + this.move_x, this.y * 1.3 + this.move_y, this.x * (1 + 0.1 * this.direct) + this.move_x, this.y * 1.3 + this.move_y, this.x + this.move_x, this.y * 1.1 + this.move_y);        
        ctx.stroke();            
        if (this.take_damage < 10) ctx.fillStyle = "rgb(0, 4, 32)";
        else ctx.fillStyle = "rgb(4, 17, 112)";
        ctx.fill();
        ctx.closePath();
        if(this.step)
        {
            ctx.beginPath()//legs stand
            ctx.lineWidth = 2;        
            ctx.strokeStyle = "black";
            ctx.moveTo(this.x * (1 - 0.029 * this.direct) + this.move_x, this.y * 1.2 + this.move_y);
            ctx.bezierCurveTo(this.x * (1 - 0.02 * this.direct) + this.move_x, this.y * 1.3 + this.move_y, this.x + this.move_x, this.y * 1.33 + this.move_y, this.x + this.move_x, this.y * 1.2 + this.move_y);        
            ctx.stroke();                      
            ctx.strokeStyle = "black";
            ctx.moveTo(this.x * (1 + 0.029 * this.direct) + this.move_x, this.y * 1.2 + this.move_y);
            ctx.bezierCurveTo(this.x * (1 + 0.02 * this.direct) + this.move_x, this.y * 1.3 + this.move_y, this.x + this.move_x, this.y * 1.33 + this.move_y, this.x + this.move_x, this.y * 1.2 + this.move_y);        
            ctx.stroke();            
            if (this.take_damage < 10) ctx.fillStyle = "rgb(44, 20, 23)";
            else ctx.fillStyle = "rgb(77, 36, 40)";
            ctx.fill();
            ctx.closePath();
        }
        else
        {
            ctx.beginPath()//legs walk
            ctx.lineWidth = 2;        
            ctx.strokeStyle = "black";
            ctx.moveTo(this.x * (1 - 0.029 * this.direct) + this.move_x, this.y * 1.2 + this.move_y);
            ctx.bezierCurveTo(this.x * (1 - 0.01 * this.direct) + this.move_x, this.y * 1.3 + this.move_y, this.x * (1 + 0.05 * this.direct) + this.move_x, this.y * 1.33 + this.move_y, this.x + this.move_x, this.y * 1.2 + this.move_y);        
            ctx.stroke();  
            ctx.fillStyle = "rgb(77, 36, 40)";
            ctx.fill();                    
            ctx.strokeStyle = "black";
            ctx.moveTo(this.x * (1 + 0.029 * this.direct) + this.move_x, this.y * 1.2 + this.move_y);
            ctx.bezierCurveTo(this.x * (1 + 0.02 * this.direct) + this.move_x, this.y * 1.3 + this.move_y, this.x * (1 - 0.03 * this.direct) + this.move_x, this.y * 1.33 + this.move_y, this.x + this.move_x, this.y * 1.2 + this.move_y);        
            ctx.stroke();            
            if (this.take_damage < 10) ctx.fillStyle = "rgb(44, 20, 23)";
            else ctx.fillStyle = "rgb(77, 36, 40)";
            ctx.fill();
            ctx.closePath();   
        }                               
    }            
}

gule = class 
{
    constructor (x, y, pos_x, pos_y)
    {
        this.slow = 1;        
        this.atack = false;
        this.who_is_it = 1;
        this.x = x;
        this.y = y;
        this.move_x = 0 + pos_x;
        this.move_y = 0 + pos_y;
        this.animation_walk = 0;
        this.step = true;
        this.light = screen_w * 0.2;
        this.object_x = x + pos_x ;//where is he
        this.object_y = y + pos_y + y / 12;//where is he                     
        this.target_y = y / 11 ;
        this.radius = x / 30;
        this.enemy = x / 2;
        this.direct = -1;   
        this.life = 10;   
        this.take_damage = 10;  
        this.hp = 0.074;
        this.see_hero = false;
        this.atack_reboot = false;
        this.reboot = 0;
        this.bit = false;
        this.fast = screen_w / 300;
        this.damage = 0.008;
    }
    draw()
    {
        ctx.globalCompositeOperation="destination-over";                        
        
        /* ctx.beginPath(); // check our target body and head
        ctx.fillStyle = "black";                               
        ctx.arc(this.object_x, this.object_y, this.radius, 0, 2*Math.PI, false);
        ctx.arc(this.object_x, this.object_y + this.target_y, this.radius, 0, 2*Math.PI, false);
        ctx.fill();
        ctx.closePath();*/

        if (this.slow < 1) this.slow += 0.01; if (this.slow > 1) this.slow = 1;

        if (this.atack_reboot) this.reboot += 1;
        if ((this.reboot == 20) && (this.atack_reboot)) {this.reboot = 0; this.atack_reboot = false;}
        ctx.beginPath();//HP MP R menu
        ctx.fillStyle = "green";
        ctx.fillRect(this.x * 0.9625 + this.move_x, this.y * 0.935 + this.move_y , this.x * this.hp, this.y / 60);
        ctx.fillStyle = "red";
        ctx.fillRect(this.x * 0.9625 + this.move_x, this.y * 0.935 + this.move_y , this.x *0.074, this.y / 60);
        ctx.fillStyle = "black";
        ctx.fillRect(this.x * 0.96 + this.move_x, this.y * 0.93 + this.move_y , this.x *0.079, this.y / 35);                
                        
        ctx.closePath();

        ctx.beginPath();//draw forward arm  
        if (this.take_damage < 10) this.take_damage--;             
        if (this.take_damage == 0) this.take_damage = 10;
        if (this.take_damage < 10) ctx.fillStyle = "rgb(63, 62, 62)"
        else ctx.fillStyle = "grey";
        if (this.slow < 1) ctx.fillStyle = "rgb(87, 102, 172)"
        ctx.arc(this.x * (1 - 0.01 * this.direct) + this.move_x, this.y * 1.17 + this.move_y, this.x / 140, 0, 2*Math.PI, false);                
        ctx.fill();
        ctx.fillStyle = "black";
        ctx.arc(this.x * (1 - 0.01 * this.direct) + this.move_x, this.y * 1.17 + this.move_y, this.x / 110, 0, 2*Math.PI, false);
        ctx.fill();
        ctx.moveTo(this.x * (1 - 0.019 * this.direct) + this.move_x, this.y * 1.17 + this.move_y); 
        ctx.lineTo(this.x * (1 - 0.015 * this.direct) + this.move_x, this.y * 1.21 + this.move_y); 
        ctx.lineTo(this.x * (1 - 0.01 * this.direct) + this.move_x, this.y * 1.17 + this.move_y); 
        ctx.lineTo(this.x * (1 - 0.009 * this.direct) + this.move_x, this.y * 1.22 + this.move_y);
        ctx.lineTo(this.x * (1 - 0.003 * this.direct) + this.move_x, this.y * 1.17 + this.move_y);
        ctx.lineTo(this.x * (1 + 0.001 * this.direct) + this.move_x, this.y * 1.2 + this.move_y); 
        ctx.lineTo(this.x * (1 - 0.01 * this.direct) + this.move_x, this.y * 1.17 + this.move_y); 
        if (this.take_damage < 10) ctx.fillStyle = "rgb(141, 133, 133)";
        else ctx.fillStyle = "white";
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();//eye
        ctx.lineWidth = 2;        
        ctx.strokeStyle = "black";
        ctx.moveTo(this.x * (1 + 0.025 * this.direct) + this.move_x, this.y * 1.05 + this.move_y);
        ctx.bezierCurveTo(this.x * (1- 0.0001 * this.direct) + this.move_x, this.y * 1.02 + this.move_y, this.x * (1 + 0.0098 * this.direct) + this.move_x, this.y * 1.08 + this.move_y, this.x * (1 + 0.025 * this.direct) + this.move_x, this.y * 1.05 + this.move_y);        
        ctx.stroke();  
        ctx.moveTo(this.x * (1 + 0.03 * this.direct) + this.move_x, this.y * 1.05 + this.move_y);
        ctx.bezierCurveTo(this.x * (1 + 0.055 * this.direct) + this.move_x, this.y * 1.04 + this.move_y, this.x * (1 + 0.03 * this.direct) + this.move_x, this.y * 1.08 + this.move_y, this.x * (1 + 0.03 * this.direct) + this.move_x, this.y * 1.05 + this.move_y);        
        ctx.stroke();                     
        ctx.strokeStyle = "black";
        if (this.take_damage < 10) ctx.fillStyle = "rgb(128, 1, 1)";
        else ctx.fillStyle = 'red';
        ctx.fill();
        ctx.closePath();
        
        if (this.reboot > 0) this.bit = true;
        if (this.reboot > 10) this.bit = false;
        if (!this.bit)
        {
            ctx.beginPath();//head
            ctx.lineWidth = this.x / 200;
            ctx.moveTo(this.x + this.move_x, this.y + this.move_y);
            ctx.bezierCurveTo(this.x * (1 + 0.05 * this.direct) + this.move_x, this.y + this.move_y, this.x *(1 + 0.05 * this.direct) + this.move_x, this.y * 1.05 + this.move_y, this.x * (1 + 0.05 * this.direct) + this.move_x, this.y * 1.1 + this.move_y);
            ctx.lineTo(this.x * (1 + 0.035 * this.direct) + this.move_x, this.y * 1.07 + this.move_y);
            ctx.lineTo(this.x * (1 + 0.03 * this.direct) + this.move_x, this.y * 1.1 + this.move_y);
            ctx.lineTo(this.x * (1 + 0.02 * this.direct) + this.move_x, this.y * 1.07 + this.move_y);
            ctx.lineTo(this.x * (1 + 0.015 * this.direct) + this.move_x, this.y * 1.1 + this.move_y);
            ctx.lineTo(this.x * (1 + 0.01 * this.direct) + this.move_x, this.y * 1.07 + this.move_y);
            ctx.bezierCurveTo(this.x * (1 - 0.001 * this.direct) + this.move_x, this.y * 1.03 + this.move_y, this.x * (1 - 0.01 * this.direct) + this.move_x, this.y * 1.13 + this.move_y, this.x * (1 + 0.01 * this.direct) + this.move_x, this.y * 1.13 + this.move_y);
            ctx.lineTo(this.x * (1 + 0.017 * this.direct) + this.move_x, this.y * 1.11 + this.move_y);
            ctx.lineTo(this.x * (1 + 0.02 * this.direct) + this.move_x, this.y * 1.13 + this.move_y);
            ctx.lineTo(this.x * (1 + 0.025 * this.direct) + this.move_x, this.y * 1.11 + this.move_y);
            ctx.lineTo(this.x * (1 + 0.03 * this.direct) + this.move_x, this.y * 1.13 + this.move_y);
            ctx.bezierCurveTo(this.x * (1 - 0.01 * this.direct) + this.move_x, this.y * 1.17 + this.move_y, this.x * (1 - 0.03 * this.direct) + this.move_x, this.y * 1.1 + this.move_y, this.x + this.move_x, this.y + this.move_y);
            if (this.take_damage < 10) ctx.fillStyle = "rgb(63, 62, 62)"
            else ctx.fillStyle = "grey";
            if (this.slow < 1) ctx.fillStyle = "rgb(87, 102, 172)"
            ctx.fill();
            ctx.stroke();
            ctx.closePath();    
        }
        else
        {
            ctx.beginPath();//head
            ctx.lineWidth = this.x / 200;
            ctx.moveTo(this.x + this.move_x, this.y + this.move_y);
            ctx.bezierCurveTo(this.x * (1 + 0.05 * this.direct) + this.move_x, this.y + this.move_y, this.x *(1 + 0.05 * this.direct) + this.move_x, this.y * 1.05 + this.move_y, this.x * (1 + 0.04 * this.direct) + this.move_x, this.y * 1.11 + this.move_y);
            ctx.lineTo(this.x * (1 + 0.033 * this.direct) + this.move_x, this.y * 1.07 + this.move_y);
            ctx.lineTo(this.x * (1 + 0.027 * this.direct) + this.move_x, this.y * 1.1 + this.move_y);
            ctx.lineTo(this.x * (1 + 0.018 * this.direct) + this.move_x, this.y * 1.07 + this.move_y);
            ctx.lineTo(this.x * (1 + 0.013 * this.direct) + this.move_x, this.y * 1.1 + this.move_y);
            ctx.lineTo(this.x * (1 + 0.007 * this.direct) + this.move_x, this.y * 1.07 + this.move_y);
            ctx.bezierCurveTo(this.x * (1 - 0.001 * this.direct) + this.move_x, this.y * 1.03 + this.move_y, this.x * (1 - 0.01 * this.direct) + this.move_x, this.y * 1.13 + this.move_y, this.x * (1 + 0.01 * this.direct) + this.move_x, this.y * 1.115 + this.move_y);
            ctx.lineTo(this.x * (1 + 0.017 * this.direct) + this.move_x, this.y * 1.11 + this.move_y);
            ctx.lineTo(this.x * (1 + 0.02 * this.direct) + this.move_x, this.y * 1.13 + this.move_y);
            ctx.lineTo(this.x * (1 + 0.025 * this.direct) + this.move_x, this.y * 1.11 + this.move_y);
            ctx.lineTo(this.x * (1 + 0.03 * this.direct) + this.move_x, this.y * 1.13 + this.move_y);
            ctx.bezierCurveTo(this.x * (1 - 0.01 * this.direct) + this.move_x, this.y * 1.17 + this.move_y, this.x * (1 - 0.03 * this.direct) + this.move_x, this.y * 1.1 + this.move_y, this.x + this.move_x, this.y + this.move_y);
            if (this.take_damage < 10) ctx.fillStyle = "rgb(63, 62, 62)"
            else ctx.fillStyle = "grey";
            if (this.slow < 1) ctx.fillStyle = "rgb(87, 102, 172)"
            ctx.fill();
            ctx.stroke();
            ctx.closePath();    
        }        
        
        ctx.beginPath();//inside mouth
        ctx.moveTo(this.x * (1 + 0.04 * this.direct) + this.move_x, this.y * 1.07 + this.move_y);
        ctx.quadraticCurveTo(this.x * (1 + 0.01 * this.direct) + this.move_x, this.y * 1.07 + this.move_y, this.x * (1 + 0.017 * this.direct) + this.move_x, this.y * 1.13 + this.move_y);
        ctx.bezierCurveTo(this.x * (1 - 0.01 * this.direct) + this.move_x, this.y * 1.155 + this.move_y, this.x * (1 - 0.03 * this.direct) + this.move_x, this.y * 1.01 + this.move_y, this.x * (1 + 0.04 * this.direct) + this.move_x, this.y * 1.07 + this.move_y);
        if (this.take_damage < 10) ctx.fillStyle = "rgb(128, 1, 1)";
        else ctx.fillStyle = 'red';
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();//boobs
        ctx.lineWidth = this.x /350;
        ctx.moveTo(this.x * (1 - 0.01 * this.direct) + this.move_x, this.y * 1.17 + this.move_y);                
        ctx.bezierCurveTo(this.x * (1 + 0.01 * this.direct) + this.move_x, this.y * 1.2 + this.move_y, this.x * (1 + 0.005 * this.direct) + this.move_x, this.y * 1.15 + this.move_y, this.x * (1 + 0.02 * this.direct) + this.move_x, this.y * 1.17 + this.move_y);        
        ctx.quadraticCurveTo(this.x * (1 + 0.03 * this.direct) + this.move_x, this.y * 1.18 + this.move_y, this.x * (1 + 0.03 * this.direct) + this.move_x, this.y * 1.17 + this.move_y);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();//body
        ctx.lineWidth = this.x / 400;
        ctx.moveTo(this.x * (1 - 0.01 * this.direct) + this.move_x, this.y * 1.07 + this.move_y);
        ctx.bezierCurveTo(this.x * (1- 0.1 * this.direct) + this.move_x, this.y * 1.3 + this.move_y, this.x * (1 + 0.12 * this.direct) + this.move_x, this.y * 1.3 + this.move_y, this.x * (1 - 0.01 * this.direct) + this.move_x, this.y * 1.07 + this.move_y);        
        ctx.stroke();
        if (this.take_damage < 10) ctx.fillStyle = "rgb(63, 62, 62)"
        else ctx.fillStyle = "grey";
        if (this.slow < 1) ctx.fillStyle = "rgb(87, 102, 172)"
        ctx.fill();
        ctx.closePath();
        
        if(this.step)
        {
            ctx.beginPath()//legs stand
            ctx.lineWidth = 2;        
            ctx.strokeStyle = "black";
            ctx.moveTo(this.x * (1 - 0.029 * this.direct) + this.move_x, this.y * 1.2 + this.move_y);
            ctx.bezierCurveTo(this.x * (1 - 0.02 * this.direct) + this.move_x, this.y * 1.3 + this.move_y, this.x + this.move_x, this.y * 1.33 + this.move_y, this.x + this.move_x, this.y * 1.2 + this.move_y);        
            ctx.stroke();                      
            ctx.strokeStyle = "black";
            ctx.moveTo(this.x * (1 + 0.029 * this.direct) + this.move_x, this.y * 1.2 + this.move_y);
            ctx.bezierCurveTo(this.x * (1 + 0.02 * this.direct) + this.move_x, this.y * 1.3 + this.move_y, this.x + this.move_x, this.y * 1.33 + this.move_y, this.x + this.move_x, this.y * 1.2 + this.move_y);        
            ctx.stroke();            
            if (this.take_damage < 10) ctx.fillStyle = "rgb(63, 62, 62)"
            else ctx.fillStyle = "grey";
            if (this.slow < 1) ctx.fillStyle = "rgb(87, 102, 172)"
            ctx.fill();
            ctx.closePath();
        }
        else
        {
            ctx.beginPath()//legs walk
            ctx.lineWidth = 2;        
            ctx.strokeStyle = "black";
            ctx.moveTo(this.x * (1 - 0.029 * this.direct) + this.move_x, this.y * 1.2 + this.move_y);
            ctx.bezierCurveTo(this.x * (1 - 0.01 * this.direct) + this.move_x, this.y * 1.3 + this.move_y, this.x * (1 + 0.05 * this.direct) + this.move_x, this.y * 1.33 + this.move_y, this.x + this.move_x, this.y * 1.2 + this.move_y);        
            ctx.stroke();                      
            ctx.fill();                    
            ctx.strokeStyle = "black";
            ctx.moveTo(this.x * (1 + 0.029 * this.direct) + this.move_x, this.y * 1.2 + this.move_y);
            ctx.bezierCurveTo(this.x * (1 + 0.02 * this.direct) + this.move_x, this.y * 1.3 + this.move_y, this.x * (1 - 0.03 * this.direct) + this.move_x, this.y * 1.33 + this.move_y, this.x + this.move_x, this.y * 1.2 + this.move_y);        
            ctx.stroke();            
            if (this.take_damage < 10) ctx.fillStyle = "rgb(63, 62, 62)"
            else ctx.fillStyle = "grey";
            if (this.slow < 1) ctx.fillStyle = "rgb(87, 102, 172)"
            ctx.fill();
            ctx.closePath();   
        }                              
        ctx.beginPath();//arm
        ctx.arc(this.x * (1 + 0.027 * this.direct) + this.move_x, this.y * 1.16 + this.move_y, this.x / 140, 0, 2*Math.PI, false);
        if (this.take_damage < 10) ctx.fillStyle = "rgb(63, 62, 62)"
        else ctx.fillStyle = "grey";
        if (this.slow < 1) ctx.fillStyle = "rgb(87, 102, 172)"
        ctx.fill();
        ctx.arc(this.x * (1 + 0.027 * this.direct) + this.move_x, this.y * 1.16 + this.move_y, this.x / 110, 0, 2*Math.PI, false);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.moveTo(this.x * (1 + 0.035 * this.direct) + this.move_x, this.y * 1.16 + this.move_y);
        ctx.lineTo(this.x * (1 + 0.032 * this.direct) + this.move_x, this.y * 1.21 + this.move_y);
        ctx.lineTo(this.x * (1 + 0.03 * this.direct) + this.move_x, this.y * 1.16 + this.move_y);
        if (this.take_damage < 10) ctx.fillStyle = "rgb(141, 133, 133)";
        else ctx.fillStyle = "white";
        ctx.fill();
        ctx.stroke();
        ctx.closePath(); 
    }                          
}

ghost = class
{
    constructor (x, y, pos_x, pos_y)
    {
        this.slow = 1;        
        this.atack = false;
        this.who_is_it = 2;
        this.x = x;
        this.y = y;
        this.move_x = 0 + pos_x;
        this.move_y = 0 + pos_y;
        this.animation_walk = 0;
        this.step = true;
        this.light = screen_w * 0.2;
        this.object_x = x + pos_x ;//where is he
        this.object_y = y + pos_y + y / 12;//where is he                     
        this.target_y = y / 11 ;
        this.radius = x / 30;
        this.enemy = x / 2.3;
        this.direct = -1;   
        this.life = 10;   
        this.take_damage = 10;  
        this.hp = 0.074;
        this.see_hero = false;
        this.atack_reboot = false;
        this.reboot = 0;
        this.bit = false;
        this.fast = screen_w / 250;
        this.damage = 0.027;
    }
    draw()
    {
        if (this.slow < 1) this.slow += 0.01; if (this.slow > 1) this.slow = 1;
        if (this.atack_reboot) this.reboot += 1;
        if ((this.reboot == 20) && (this.atack_reboot)) {this.reboot = 0; this.atack_reboot = false;}
        ctx.beginPath();//HP MP R menu
        ctx.fillStyle = "green";
        ctx.fillRect(this.x * 0.9625 + this.move_x, this.y * 0.935 + this.move_y , this.x * this.hp, this.y / 60);
        ctx.fillStyle = "red";
        ctx.fillRect(this.x * 0.9625 + this.move_x, this.y * 0.935 + this.move_y , this.x *0.074, this.y / 60);
        ctx.fillStyle = "black";
        ctx.fillRect(this.x * 0.96 + this.move_x, this.y * 0.93 + this.move_y , this.x *0.079, this.y / 35);                
                        
        ctx.closePath();

        ctx.beginPath();//draw forward arm  
        if (this.take_damage < 10) this.take_damage--;             
        if (this.take_damage == 0) this.take_damage = 10;
        if (this.take_damage < 10) ctx.fillStyle = "rgb(63, 62, 62)"
        else ctx.fillStyle = "grey";
        if (this.slow < 1) ctx.fillStyle = "rgb(87, 102, 172)"
                
        
        if (this.reboot > 0) this.bit = true;
        if (this.reboot > 10) this.bit = false;
        if (!this.bit)
        {
            ctx.beginPath();//eye
            ctx.lineWidth = 2;        
            ctx.strokeStyle = "black";
            ctx.moveTo(this.x * (1 + 0.025 * this.direct) + this.move_x, this.y * 1.05 + this.move_y);
            ctx.bezierCurveTo(this.x * (1- 0.0001 * this.direct) + this.move_x, this.y * 1.05 + this.move_y, this.x * (1 + 0.0098 * this.direct) + this.move_x, this.y * 1.1 + this.move_y, this.x * (1 + 0.025 * this.direct) + this.move_x, this.y * 1.05 + this.move_y);        
            ctx.stroke();  
            ctx.moveTo(this.x * (1 + 0.03 * this.direct) + this.move_x, this.y * 1.05 + this.move_y);
            ctx.bezierCurveTo(this.x * (1 + 0.055 * this.direct) + this.move_x, this.y * 1.04 + this.move_y, this.x * (1 + 0.03 * this.direct) + this.move_x, this.y * 1.08 + this.move_y, this.x * (1 + 0.03 * this.direct) + this.move_x, this.y * 1.05 + this.move_y);        
            ctx.stroke();                     
            ctx.strokeStyle = "black";
            if (this.take_damage < 10) ctx.fillStyle = "rgb(128, 1, 1)";
            else ctx.fillStyle = 'black';
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.moveTo(this.x * (1 + 0.03 * this.direct) + this.move_x, this.y * 1.08 + this.move_y);
            ctx.bezierCurveTo(this.x * (1- 0.0001 * this.direct) + this.move_x, this.y * 1.1 + this.move_y, this.x * (1 + 0.0098 * this.direct) + this.move_x, this.y * 1.15 + this.move_y, this.x * (1 + 0.025 * this.direct) + this.move_x, this.y * 1.12 + this.move_y);        
            ctx.bezierCurveTo(this.x * (1 + 0.04 * this.direct) + this.move_x, this.y * 1.1 + this.move_y, this.x * (1 + 0.0098 * this.direct) + this.move_x, this.y * 1.15 + this.move_y, this.x * (1 + 0.03 * this.direct) + this.move_x, this.y * 1.08 + this.move_y);
            ctx.stroke();  
            ctx.closePath();

            ctx.beginPath();//head
            ctx.lineWidth = this.x / 200;
            ctx.moveTo(this.x + this.move_x, this.y + this.move_y);
            ctx.bezierCurveTo(this.x * (1 + 0.05 * this.direct) + this.move_x, this.y + this.move_y, this.x *(1 + 0.05 * this.direct) + this.move_x, this.y * 1.05 + this.move_y, this.x * (1 + 0.05 * this.direct) + this.move_x, this.y * 1.15 + this.move_y);
            ctx.bezierCurveTo(this.x * (1 + 0.045 * this.direct) + this.move_x, this.y * 1.16 + this.move_y, this.x *(1 + 0.04 * this.direct) + this.move_x, this.y * 1.1 + this.move_y, this.x * (1 + 0.03 * this.direct) + this.move_x, this.y * 1.25 + this.move_y);
            ctx.bezierCurveTo(this.x * (1 + 0.03 * this.direct) + this.move_x, this.y * 1.2 + this.move_y, this.x *(1 + 0.04 * this.direct) + this.move_x, this.y * 1.1 + this.move_y, this.x * (1 + 0.01 * this.direct) + this.move_x, this.y * 1.22 + this.move_y);
            ctx.bezierCurveTo(this.x * (1 + 0.01 * this.direct) + this.move_x, this.y * 1.2 + this.move_y, this.x *(1 + 0.04 * this.direct) + this.move_x, this.y * 1.1 + this.move_y, this.x * (1 - 0.01 * this.direct) + this.move_x, this.y * 1.2 + this.move_y);
            ctx.bezierCurveTo(this.x * (1 - 0.025 * this.direct) + this.move_x, this.y * 1.17 + this.move_y, this.x *(1 + 0.01 * this.direct) + this.move_x, this.y * 1.1 + this.move_y, this.x * (1 - 0.01 * this.direct) + this.move_x, this.y * 1.2 + this.move_y);
            ctx.bezierCurveTo(this.x * (1 - 0.025 * this.direct) + this.move_x, this.y * 1.17 + this.move_y, this.x *(1 + 0.01 * this.direct) + this.move_x, this.y * 1.1 + this.move_y, this.x * (1 - 0.03 * this.direct) + this.move_x, this.y * 1.2 + this.move_y);
            //ctx.bezierCurveTo(this.x * (1 - 0.001 * this.direct) + this.move_x, this.y * 1.03 + this.move_y, this.x * (1 - 0.01 * this.direct) + this.move_x, this.y * 1.13 + this.move_y, this.x * (1 + 0.01 * this.direct) + this.move_x, this.y * 1.13 + this.move_y);
           
            ctx.bezierCurveTo(this.x * (1 - 0.01 * this.direct) + this.move_x, this.y * 1.17 + this.move_y, this.x * (1 - 0.03 * this.direct) + this.move_x, this.y * 1.1 + this.move_y, this.x + this.move_x, this.y + this.move_y);
            if (this.take_damage < 10) ctx.fillStyle = "rgb(63, 62, 62)"
            else ctx.fillStyle = "white";
            if (this.slow < 1) ctx.fillStyle = "rgb(87, 102, 172)"
            ctx.fill();
            ctx.stroke();
            ctx.closePath();   
        }
        else
        {
            ctx.beginPath();//eye
            ctx.lineWidth = 2;        
            ctx.strokeStyle = "black";
            ctx.moveTo(this.x * (1 + 0.025 * this.direct) + this.move_x, this.y * 1.05 + this.move_y);
            ctx.bezierCurveTo(this.x * (1 - 0.01 * this.direct) + this.move_x, this.y * 1.005 + this.move_y, this.x * (1 - 0.005 * this.direct) + this.move_x, this.y * 1.1 + this.move_y, this.x * (1 + 0.025 * this.direct) + this.move_x, this.y * 1.05 + this.move_y);  
            ctx.stroke();  
            ctx.moveTo(this.x * (1 + 0.03 * this.direct) + this.move_x, this.y * 1.05 + this.move_y);
            ctx.bezierCurveTo(this.x * (1 + 0.06 * this.direct) + this.move_x, this.y * 1.04 + this.move_y, this.x * (1 + 0.03 * this.direct) + this.move_x, this.y * 1.08 + this.move_y, this.x * (1 + 0.03 * this.direct) + this.move_x, this.y * 1.05 + this.move_y);        
            ctx.stroke();                     
            ctx.strokeStyle = "black";
            if (this.take_damage < 10) ctx.fillStyle = "rgb(128, 1, 1)";
            else ctx.fillStyle = 'aqua';
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.moveTo(this.x * (1 + 0.03 * this.direct) + this.move_x, this.y * 1.08 + this.move_y);
            ctx.bezierCurveTo(this.x * (1- 0.01 * this.direct) + this.move_x, this.y * 1.08 + this.move_y, this.x * (1 + 0.0098 * this.direct) + this.move_x, this.y * 1.15 + this.move_y, this.x * (1 + 0.025 * this.direct) + this.move_x, this.y * 1.12 + this.move_y);        
            ctx.bezierCurveTo(this.x * (1 + 0.04 * this.direct) + this.move_x, this.y * 1.1 + this.move_y, this.x * (1 + 0.0098 * this.direct) + this.move_x, this.y * 1.15 + this.move_y, this.x * (1 + 0.03 * this.direct) + this.move_x, this.y * 1.08 + this.move_y);
            ctx.stroke();
            ctx.fill();  
            ctx.closePath();

            ctx.beginPath();//head
            ctx.lineWidth = this.x / 200;
            ctx.moveTo(this.x + this.move_x, this.y + this.move_y);
            ctx.bezierCurveTo(this.x * (1 + 0.05 * this.direct) + this.move_x, this.y + this.move_y, this.x *(1 + 0.05 * this.direct) + this.move_x, this.y * 1.05 + this.move_y, this.x * (1 + 0.06 * this.direct) + this.move_x, this.y * 1.15 + this.move_y);
            ctx.bezierCurveTo(this.x * (1 + 0.045 * this.direct) + this.move_x, this.y * 1.16 + this.move_y, this.x *(1 + 0.04 * this.direct) + this.move_x, this.y * 1.1 + this.move_y, this.x * (1 + 0.06 * this.direct) + this.move_x, this.y * 1.25 + this.move_y);
            ctx.bezierCurveTo(this.x * (1 + 0.03 * this.direct) + this.move_x, this.y * 1.2 + this.move_y, this.x *(1 + 0.04 * this.direct) + this.move_x, this.y * 1.1 + this.move_y, this.x * (1 + 0.03 * this.direct) + this.move_x, this.y * 1.22 + this.move_y);
            ctx.bezierCurveTo(this.x * (1 + 0.01 * this.direct) + this.move_x, this.y * 1.2 + this.move_y, this.x *(1 + 0.04 * this.direct) + this.move_x, this.y * 1.1 + this.move_y, this.x * (1 - 0.001 * this.direct) + this.move_x, this.y * 1.23 + this.move_y);
            ctx.bezierCurveTo(this.x * (1 - 0.025 * this.direct) + this.move_x, this.y * 1.17 + this.move_y, this.x *(1 + 0.01 * this.direct) + this.move_x, this.y * 1.1 + this.move_y, this.x * (1 - 0.02 * this.direct) + this.move_x, this.y * 1.2 + this.move_y);
            ctx.bezierCurveTo(this.x * (1 - 0.025 * this.direct) + this.move_x, this.y * 1.17 + this.move_y, this.x *(1 + 0.01 * this.direct) + this.move_x, this.y * 1.15 + this.move_y, this.x * (1 - 0.05 * this.direct) + this.move_x, this.y * 1.16 + this.move_y);
            //ctx.bezierCurveTo(this.x * (1 - 0.001 * this.direct) + this.move_x, this.y * 1.03 + this.move_y, this.x * (1 - 0.01 * this.direct) + this.move_x, this.y * 1.13 + this.move_y, this.x * (1 + 0.01 * this.direct) + this.move_x, this.y * 1.13 + this.move_y);           
            ctx.bezierCurveTo(this.x * (1 - 0.01 * this.direct) + this.move_x, this.y * 1.17 + this.move_y, this.x * (1 - 0.03 * this.direct) + this.move_x, this.y * 1.1 + this.move_y, this.x + this.move_x, this.y + this.move_y);
            if (this.take_damage < 10) ctx.fillStyle = "rgb(63, 62, 62)"
            else ctx.fillStyle = "white";
            if (this.slow < 1) ctx.fillStyle = "rgb(87, 102, 172)"
            ctx.fill();
            ctx.stroke();
            ctx.closePath();               
        }        
        
       
        
        /*if(this.step)
        {
            ctx.beginPath()//legs stand
            ctx.lineWidth = 2;        
            ctx.strokeStyle = "black";
            ctx.moveTo(this.x * (1 - 0.029 * this.direct) + this.move_x, this.y * 1.2 + this.move_y);
            ctx.bezierCurveTo(this.x * (1 - 0.02 * this.direct) + this.move_x, this.y * 1.3 + this.move_y, this.x + this.move_x, this.y * 1.33 + this.move_y, this.x + this.move_x, this.y * 1.2 + this.move_y);        
            ctx.stroke();                      
            ctx.strokeStyle = "black";
            ctx.moveTo(this.x * (1 + 0.029 * this.direct) + this.move_x, this.y * 1.2 + this.move_y);
            ctx.bezierCurveTo(this.x * (1 + 0.02 * this.direct) + this.move_x, this.y * 1.3 + this.move_y, this.x + this.move_x, this.y * 1.33 + this.move_y, this.x + this.move_x, this.y * 1.2 + this.move_y);        
            ctx.stroke();            
            if (this.take_damage < 10) ctx.fillStyle = "rgb(63, 62, 62)"
            else ctx.fillStyle = "grey";
            if (this.slow < 1) ctx.fillStyle = "rgb(87, 102, 172)"
            ctx.fill();
            ctx.closePath();
        }
        else
        {
            ctx.beginPath()//legs walk
            ctx.lineWidth = 2;        
            ctx.strokeStyle = "black";
            ctx.moveTo(this.x * (1 - 0.029 * this.direct) + this.move_x, this.y * 1.2 + this.move_y);
            ctx.bezierCurveTo(this.x * (1 - 0.01 * this.direct) + this.move_x, this.y * 1.3 + this.move_y, this.x * (1 + 0.05 * this.direct) + this.move_x, this.y * 1.33 + this.move_y, this.x + this.move_x, this.y * 1.2 + this.move_y);        
            ctx.stroke();                      
            ctx.fill();                    
            ctx.strokeStyle = "black";
            ctx.moveTo(this.x * (1 + 0.029 * this.direct) + this.move_x, this.y * 1.2 + this.move_y);
            ctx.bezierCurveTo(this.x * (1 + 0.02 * this.direct) + this.move_x, this.y * 1.3 + this.move_y, this.x * (1 - 0.03 * this.direct) + this.move_x, this.y * 1.33 + this.move_y, this.x + this.move_x, this.y * 1.2 + this.move_y);        
            ctx.stroke();            
            if (this.take_damage < 10) ctx.fillStyle = "rgb(63, 62, 62)"
            else ctx.fillStyle = "grey";
            if (this.slow < 1) ctx.fillStyle = "rgb(87, 102, 172)"
            ctx.fill();
            ctx.closePath();   
        }  */                                           
    }
}

chest = class
{
    constructor (x, y, pos_x, pos_y)
    {
        this.x = x;
        this.y = y;
        this.object_x = pos_x;
        this.object_y = pos_y;
        this.radius = screen_w * 0.02;
    }
    draw()
    {
        ctx.beginPath();
        
        /*ctx.beginPath();
        ctx.arc(this.x + this.object_x * 1.05, this.y + this.object_y, screen_w * 0.02, 0, 2*Math.PI, false);
        ctx.fillStyle = "green";
        ctx.fill();
        ctx.closePath();*/
        
        ctx.fillRect(this.x + this.object_x, this.y + this.object_y, screen_w / 20, screen_h / 20);
        ctx.fillStyle = "black";        
        ctx.fillRect(this.x + this.object_x * 0.998, this.y + this.object_y * 0.998, screen_w * 0.052, screen_h * 0.0565);
            
        ctx.arc(this.x + this.object_x * 1.01, this.y + this.object_y, screen_w * 0.005, 0, 2*Math.PI, false);
        ctx.fillStyle = "yellow";
        ctx.fill();
        ctx.arc(this.x + this.object_x * 1.01, this.y + this.object_y, screen_w * 0.006, 0, 2*Math.PI, false);
        ctx.fillStyle = "black";
        ctx.fill();

        ctx.arc(this.x + this.object_x * 1.06, this.y + this.object_y, screen_w * 0.005, 0, 2*Math.PI, false);
        ctx.fillStyle = "yellow";
        ctx.fill();
        ctx.arc(this.x + this.object_x * 1.06, this.y + this.object_y, screen_w * 0.006, 0, 2*Math.PI, false);
        ctx.fillStyle = "black";
        ctx.fill();

        ctx.arc(this.x + this.object_x * 1.03, this.y + this.object_y, screen_w * 0.005, 0, 2*Math.PI, false);
        ctx.fillStyle = "yellow";
        ctx.fill();
        ctx.arc(this.x + this.object_x * 1.03, this.y + this.object_y, screen_w * 0.006, 0, 2*Math.PI, false);
        ctx.fillStyle = "black";
        ctx.fill();

        ctx.arc(this.x + this.object_x * 1.04, this.y + this.object_y, screen_w * 0.005, 0, 2*Math.PI, false);
        ctx.fillStyle = "yellow";
        ctx.fill();
        ctx.arc(this.x + this.object_x * 1.04, this.y + this.object_y, screen_w * 0.006, 0, 2*Math.PI, false);
        ctx.fillStyle = "black";
        ctx.fill();

        ctx.arc(this.x + this.object_x * 1.09, this.y + this.object_y, screen_w * 0.005, 0, 2*Math.PI, false);
        ctx.fillStyle = "yellow";
        ctx.fill();
        ctx.arc(this.x + this.object_x * 1.09, this.y + this.object_y, screen_w * 0.006, 0, 2*Math.PI, false);
        ctx.fillStyle = "black";
        ctx.fill();

        ctx.arc(this.x + this.object_x * 1.07, this.y + this.object_y, screen_w * 0.005, 0, 2*Math.PI, false);
        ctx.fillStyle = "yellow";
        ctx.fill();
        ctx.arc(this.x + this.object_x * 1.07, this.y + this.object_y, screen_w * 0.006, 0, 2*Math.PI, false);
        ctx.fillStyle = "black";
        ctx.fill();

        ctx.moveTo(this.x + this.object_x, this.y + this.object_y);
        ctx.lineTo(this.x + this.object_x, this.y + this.object_y * 0.95);
        ctx.lineTo(this.x + this.object_x * 1.1, this.y + this.object_y * 0.95);
        ctx.lineTo(this.x + this.object_x * 1.1, this.y + this.object_y);
        ctx.fillStyle = "rgb(77, 36, 40)";
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
}

room_key = class
{
    constructor(x, y, size_x, size_y, pos_x, pos_y, key)
    {
        this.x = x;
        this.y = y;
        this.pos_x = pos_x;
        this.pos_y = pos_y;
        this.size_x = size_x;
        this.size_y = size_y;
        this.which_door = key;
        this.radius = screen_w * 0.005
    }
    draw()
    {
        ctx.beginPath();
        /*ctx.arc(this.x * 1.05 + this.pos_x, this.y * 1.15 + this.pos_y, screen_w * 0.005, 0, 2*Math.PI, false);
        ctx.fillStyle = "black";
        ctx.fill();*/
        ctx.fillStyle = "rgb(222, 148, 170)";
        ctx.fillRect(this.x * 1.02 + this.pos_x, this.y * 1.04 + this.pos_y, this.size_x * 0.6, this.size_y * 0.25)
        ctx.fillStyle = "gold";
        ctx.fillRect(this.x + this.pos_x, this.y + this.pos_y, this.size_x, this.size_y * 0.5); 
        ctx.fillRect(this.x * 1.04 + this.pos_x, this.y * 1.05 + this.pos_y, this.size_x * 0.25, this.size_y);          
        ctx.fillRect(this.x * 1.02 + this.pos_x, this.y * 1.27 + this.pos_y, this.size_x * 0.25, this.size_y * 0.2);
        ctx.closePath();
    }
}