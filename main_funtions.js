function move()
        {  
            draw_dark(unit[0]);
            for (let i = 0; i < atack.length; i++) {atack[i].draw();}                            
            for (let i = 0; i < unit.length; i++)//just change x and y
            {                   
                if (unit[i].who_is_it == 0) // 0 means hero
                {
                    if ((Keys.right===true)&&(right_wall_step())) {unit[i].move_x += screen_w / 200; unit[i].object_x += screen_w / 200; unit[i].direct = 1; right_vision();};                
                    if (Keys.left ===true) {unit[i].move_x -= screen_w / 200; unit[i].object_x -= screen_w / 200; unit[i].direct = -1; left_vision();};
                    if (Keys.down ===true) {unit[i].move_y += screen_w / 200; unit[i].object_y += screen_w / 200; down_vision();};  //scrolldown()};                
                    if (Keys.up   ===true) {unit[i].move_y -= screen_w / 200; unit[i].object_y -= screen_w / 200; up_vision();};  //scrollup()};
                    if ((Keys.up) || (Keys.left) || (Keys.down) || (Keys.right))//animation move
                    {
                        if (unit[i].animation_walk == 0)
                        {
                            unit[i].step = false;
                            unit[i].animation_walk = 10;
                        }
                        else if(unit[i].animation_walk == 5) unit[i].step = true;
                        unit[i].animation_walk--;
                    }
                    else {unit[i].animation_walk = 0; unit[i].step = true;} //if he doesn't move
                }
                else if (unit[i].who_is_it == 1)
                {
                    if((enemy_see_hero()) && (!unit[i].atack))
                    {
                    if ((unit[i].move_x < unit[0].move_x) && (Math.abs(unit[i].move_x - unit[0].move_x) > screen_w / 300)) {unit[i].move_x += screen_w /300; unit[i].object_x += screen_w / 300; unit[i].direct = 1;}
                    else if ((unit[i].move_x >= unit[0].move_x) && (Math.abs(unit[i].move_x - unit[0].move_x) > screen_w / 300)) {unit[i].move_x -= screen_w /300; unit[i].object_x -= screen_w / 300; unit[i].direct = -1;};
                    if ((unit[i].move_y < unit[0].move_y) && (Math.abs(unit[i].move_y - unit[0].move_y) > screen_w / 300)) {unit[i].move_y += screen_w / 300; unit[i].object_y += screen_w / 300;}
                    else if ((unit[i].move_y > unit[0].move_y) && (Math.abs(unit[i].move_y - unit[0].move_y) > screen_w / 300)) {unit[i].move_y -= screen_w / 300; unit[i].object_y -= screen_w / 300;}
                    if (unit[i].animation_walk == 0)
                        {
                            unit[i].step = false;
                            unit[i].animation_walk = 10;
                        }
                        else if(unit[i].animation_walk == 5) unit[i].step = true;
                        unit[i].animation_walk--;
                    }
                } 
                else if (unit[i].who_is_it == 2)
                {
                    //unit[i].move_x +=screen_w / 150; unit[i].object_x += screen_w / 150;
                    //unit[i].x_func += 10;
                    //alert('we are here')
                    //unit[i].y_func = unit[i].y1_func + ((unnit[i].y1_func) * (unit[i].x_func - unit[i].x1_func)) / (unit[i].x2_func - unit[i].x1_func)
                    
                    //alert(Math.cos(unit[i].x_func));
                    
                    unit[i].draw();
                }
                else {unit[i].animation_walk = 0; unit[i].step = true;}                                                                            
                unit[i].draw();
                walls[0].draw();
                check_atack_hero();
                if (theMostImportantLoad) {load(); theMostImportantLoad = false};// it's just for load camera in right direction at start                
            }
       
            draw_walls(); 
            draw_back();
            monstr_atack();
            //draw_dark(unit[0]);
        }