invisible_wall = class
{
    constructor(x, y, pos_x, pos_y)
    {
        this.x = x;
        this.y = y;
        this.object_x = pos_x;//where is he going
        this.object_y = pos_y;//where is he going                   
    }
    draw()
    {
        ctx.globalCompositeOperation="destination-over"; 
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.object_x, this.y + this.object_y);                    
        ctx.stroke();
        ctx.closePath();
    }
}
function spawn_wall(x1, y1, x2, y2, which_wall)
{
    if (which_wall == 0)
    {
        a = new invisible_wall(x1, y1, x2, y2);// top wall
        walls_top.push(a);
    }
    if (which_wall == 1)
    {
        a = new invisible_wall(x1, y1, x2, y2);// left wall
        walls_left.push(a);
    }
    if (which_wall == 2)
    {
        a = new invisible_wall(x1, y1, x2, y2);// bottom wall
        walls_bot.push(a);
    }
    if (which_wall == 3)
    {
        a = new invisible_wall(x1, y1, x2, y2);// right wall
        walls_right.push(a);
    }
}

function spawn_invision_walls()
{   
    spawn_wall(screen_w * 0.05, screen_h * 0.083, screen_w * 0.25, 0, 0);// just spawn a big room{
    //spawn_wall(screen_w * 0.05, screen_h * 0.085, 0, screen_h * 1.835, 1);
    spawn_wall(screen_w * 0.05, screen_h * 2 * 0.96, screen_w * 0.49, 0, 2);
    spawn_wall(screen_w * 2 * 0.98, 0, 0, screen_h * 1.745);// just spawn a big room}

    spawn_wall(screen_w * 0.05, screen_h * 0.085, 0, screen_h * 0.415, 1);
    spawn_wall(screen_w * 0.05, screen_h * 0.75, 0, screen_h * 1.17, 1);

    
    spawn_wall(screen_w * 0.05, screen_h * 0.5, screen_w * 0.25, 0, 2);
    spawn_wall(screen_w * 0.3, screen_h * 0.35, 0, screen_h * 0.15, 3);//door
    spawn_wall(screen_w * 0.3, screen_h * 0.083, 0, screen_h * 0.08, 3);
    spawn_wall(screen_w * 0.3, screen_h * 0.35, screen_w * 0.2, 0, 2);
    spawn_wall(screen_w * 0.3, screen_h * 0.163, screen_w, 0, 0);//razvilka with the key for the key
    spawn_wall(screen_w * 1.05, screen_h * 0.35, screen_w * 0.25, 0, 2);
    spawn_wall(screen_w * 1.3, screen_h * 0.37, 0, screen_h * 0.43, 1);//jopa
    spawn_wall(screen_w * 1.3, screen_h * 0.8, screen_w * 0.1, 0, 2);//jopa bottom
    spawn_wall(screen_w * 1.3, screen_h * 0.083, screen_w * 0.65, 0, 0);

    spawn_wall(screen_w * 1.43, screen_h * 0.8, screen_w * 0.52, 0, 2);
    spawn_wall(screen_w * 1.95, screen_h * 0.085, 0, screen_h * 0.715, 3);
    spawn_wall(screen_w * 1.3, screen_h * 0.085, 0, screen_h * 0.078, 1);
    spawn_wall(screen_w * 1.3, screen_h * 0.35, screen_w * 0.55, 0, 2);
    spawn_wall(screen_w * 1.85, screen_h * 0.35, 0, screen_h * 0.25, 1);
    spawn_wall(screen_w * 1.5, screen_h * 0.6, screen_w * 0.35, 0, 0);
    spawn_wall(screen_w * 1.5, screen_h * 0.55, 0, screen_h * 0.05, 3);
    spawn_wall(screen_w * 1.5, screen_h * 0.55, screen_w * 0.1, 0, 2);
    spawn_wall(screen_w * 1.6, screen_h * 0.37, 0, screen_h * 0.18, 3);
    spawn_wall(screen_w * 1.3, screen_h * 0.37, screen_w * 0.3, 0, 0);
    spawn_wall(screen_w * 1.43, screen_h * 0.55, 0, screen_h * 0.25, 1);
    spawn_wall(screen_w * 1.4, screen_h * 0.55, screen_w * 0.03, 0, 2);
    spawn_wall(screen_w * 1.4, screen_h * 0.55, 0, screen_h * 0.25, 3);

    spawn_wall(screen_w * 0.5, screen_h * 0.35, 0, screen_h * 0.4, 1);//door
    spawn_wall(screen_w * 0.05, screen_h * 0.75, screen_w * 0.45, 0, 0);//razvilka with a trap
    spawn_wall(screen_w * 0.15, screen_h * 1.3, screen_w * 0.35, 0, 2);
    spawn_wall(screen_w * 0.5, screen_h * 0.95, 0, screen_h * 0.35, 3);
    spawn_wall(screen_w * 0.5, screen_h * 0.95, screen_w * 0.1, 0, 2);
    spawn_wall(screen_w * 0.6, screen_h * 0.95, 0, screen_h * 0.4, 1);
    spawn_wall(screen_w * 0.6, screen_h * 1.35, screen_w * 0.1, 0, 2);
    spawn_wall(screen_w * 0.7, screen_h * 0.95, 0, screen_h * 0.4, 3);
    spawn_wall(screen_w * 0.7, screen_h * 0.75, 0, screen_h * 0.6, 3);
    spawn_wall(screen_w * 0.6, screen_h * 0.75, screen_w * 0.1, 0, 0);
    spawn_wall(screen_w * 0.6, screen_h * 0.35, 0, screen_h * 0.4, 3);
    spawn_wall(screen_w * 0.6, screen_h * 0.35, screen_w * 0.35, 0, 2);
    spawn_wall(screen_w * 0.95, screen_h * 0.35, 0, screen_h * 0.4, 1);
    spawn_wall(screen_w * 0.8, screen_h * 0.75, screen_w * 0.15, 0, 0);
    spawn_wall(screen_w * 0.8, screen_h * 0.75, 0, screen_h * 0.6, 1);
    spawn_wall(screen_w * 0.8, screen_h * 1.35, screen_w * 0.12, 0, 2);
    spawn_wall(screen_w * 0.92, screen_h * 1.35, 0, screen_h * 0.3, 1);

    spawn_wall(screen_w * 0.92, screen_h * 1.65, screen_w * 0.16, 0, 2);
    spawn_wall(screen_w * 1.08, screen_h * 1.35, 0, screen_h * 0.3, 3);
    
    spawn_wall(screen_w * 1.08, screen_h * 1.35, screen_w * 0.12, 0, 2);
    spawn_wall(screen_w * 1.2, screen_h * 0.75, 0, screen_h * 0.6, 3);
    spawn_wall(screen_w * 1.05, screen_h * 0.75, screen_w * 0.15, 0, 0);
    spawn_wall(screen_w * 1.05, screen_h * 0.35, 0, screen_h * 0.4, 3);
    
    
    //spawn_wall(screen_w * 0.7, screen_h * 0.35, 0, screen_h * 0.4, 3);
    //razvilka room with 1
    spawn_wall(screen_w * 0.15, screen_h * 1.3, 0, screen_h * 0.45, 3);
    spawn_wall(screen_w * 0.15, screen_h * 1.75, screen_w * 0.3, 0, 0);
    spawn_wall(screen_w * 0.45, screen_h * 1.65, 0, screen_h * 0.1, 1);
    spawn_wall(screen_w * 0.19, screen_h * 1.65, screen_w * 0.26, 0, 2);
    spawn_wall(screen_w * 0.19, screen_h * 1.38, 0, screen_h * 0.27, 1);
    spawn_wall(screen_w * 0.19, screen_h * 1.38, screen_w * 0.1, 0, 0);
    spawn_wall(screen_w * 0.29, screen_h * 1.38, 0, screen_h * 0.1, 3);
    spawn_wall(screen_w * 0.29, screen_h * 1.48, screen_w * 0.25, 0, 0);
    spawn_wall(screen_w * 0.54, screen_h * 1.48, 0, screen_h * 0.44, 3);  
        
}

function right_wall_step(i)
{   
    if (unit[i].who_is_it == 2) return true;
    if (Math.pow(Math.pow(sunduk.object_x * 1.05+ sunduk.x - unit[0].object_x, 2) + Math.pow(sunduk.object_y + sunduk.y- unit[0].object_y, 2), 1/2) < unit[0].radius + sunduk.radius) 
    {
        chest_found += 1;       
        unit.splice(0,1);  
        Keys.down = false;          
        finish();
    }  
    for (let j = 0; j < walls_right.length; j++) 
    if((unit[i].object_y + screen_h / 11 > walls_right[j].y) && (unit[i].object_y - screen_h * 0.05 < walls_right[j].y + walls_right[j].object_y) && (unit[i].object_x + screen_w / 50 > walls_right[j].x) && (Math.abs(unit[i].object_x + screen_w / 50 - walls_right[j].x) < screen_w / 50)) return false;
    return true;
}

function left_wall_step(i)
{   
    if (unit[i].who_is_it == 2) return true;
    if (Math.pow(Math.pow(sunduk.object_x * 1.05+ sunduk.x - unit[0].object_x, 2) + Math.pow(sunduk.object_y + sunduk.y- unit[0].object_y, 2), 1/2) < unit[0].radius + sunduk.radius) 
    {
        chest_found += 1;       
        unit.splice(0,1);  
        Keys.down = false;          
        finish();
    }  
    for (let j = 0; j < walls_left.length; j++) 
    if((unit[i].object_y + screen_h / 11 > walls_left[j].y) && (unit[i].object_y - screen_h * 0.05 < walls_left[j].y + walls_left[j].object_y) && (unit[i].object_x - screen_w / 50 < walls_left[j].x) && (Math.abs(unit[i].object_x - screen_w / 50 - walls_left[j].x) < screen_w / 50)) return false;
    return true;
}

function top_wall_step(i)
{   
    if (unit[i].who_is_it == 2) return true;
    if (Math.pow(Math.pow(sunduk.object_x * 1.05+ sunduk.x - unit[0].object_x, 2) + Math.pow(sunduk.object_y + sunduk.y- unit[0].object_y, 2), 1/2) < unit[0].radius + sunduk.radius) 
    {
        chest_found += 1;       
        unit.splice(0,1);  
        Keys.down = false;          
        finish();
    }  
    for (let j = 0; j < walls_top.length; j++)
    if ((unit[i].object_x + screen_w * 0.015 > walls_top[j].x) && (unit[i].object_x - screen_w * 0.01 < walls_top[j].x + walls_top[j].object_x) && (unit[i].object_y - screen_w / 30 < walls_top[j].y) && (Math.abs(unit[i].object_y - screen_w / 30 - walls_top[j].y) < screen_w / 30)) return false;
    return true;
}

function bot_wall_step(i)
{
    if (unit[i].who_is_it == 2) return true;
    if (Math.pow(Math.pow(sunduk.object_x * 1.05+ sunduk.x - unit[0].object_x, 2) + Math.pow(sunduk.object_y + sunduk.y- unit[0].object_y, 2), 1/2) < unit[0].radius + sunduk.radius) 
    {
        chest_found += 1;       
        unit.splice(0,1);  
        Keys.down = false;          
        finish();
    }  
    for (let j = 0; j < walls_bot.length; j++)
    if ((unit[i].object_x + screen_w *0.015 > walls_bot[j].x) && (unit[i].object_x - screen_w * 0.01 < walls_bot[j].x + walls_bot[j].object_x) && (unit[i].object_y + screen_w / 18.5 > walls_bot[j].y) && (Math.abs(unit[i].object_y + screen_w / 18.5 - walls_bot[j].y) < screen_w / 30)) return false;
    return true;
}

