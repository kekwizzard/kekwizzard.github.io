function right_vision()
{
    for (let i = 0; i < watch_width_wall.length; i++)
    {
        if ((unit[0].object_x > watch_width_wall[i].object_x) && (watch_width_wall[i].visited)) 
        {
            window.scrollTo({
                left: screen_w / 20 * 10 * (i + 1) ,
                behavior: "smooth"
            });
            global_click_x = screen_w / 20 * 10 * (i + 1) + 1;
            watch_width_wall[i].visited = false;                    
        }
    }            
}

function left_vision()
{
    for (let i = 0; i < watch_width_wall.length; i++)
    {
        if ((unit[0].object_x < watch_width_wall[i].object_x) && (!watch_width_wall[i].visited)) 
        {
            window.scrollTo({
                left: screen_w / 20 * 10 * i,
                behavior: "smooth"
            });
            global_click_x = screen_w / 20 * 10 * i;                    
            watch_width_wall[i].visited = true;
        }
    }
}

function down_vision()
{
    for (let i = 0; i < watch_height_wall.length; i++)
    {
        if ((unit[0].object_y > watch_height_wall[i].object_y) && (watch_height_wall[i].visited)) 
        {
            window.scrollTo({
                top: screen_h / 20 * 10 * (i + 1) ,
                behavior: "smooth"
            });
            global_click_y = screen_h / 20 * 10 * (i + 1) + 1;
            watch_height_wall[i].visited = false;
        }
    }            
}

function up_vision()
{
    for (let i = 0; i < watch_height_wall.length; i++)
    {
        if ((unit[0].object_y < watch_height_wall[i].object_y) && (!watch_height_wall[i].visited)) 
        {
            window.scrollTo({
                top: screen_h / 20 * 10 * i ,
                behavior: "smooth"
            });
            global_click_y = screen_h / 20 * 10 * i;
            watch_height_wall[i].visited = true;
        }
    }           
}
function check_HP_MP()
{
    if (unit[0].mp < 0.074) unit[0].mp +=0.0003; 
    if (unit[0].mp > 0.074) unit[0].mp = 0.074;
    for (let i = 0; i < unit.length; i++) {if (unit[i].hp < 0.074) unit[i].hp +=0.0001;}
}

function check_keys()
{
    for (let i = 0; i < point_key.length;)
    {
        let a = Math.pow(Math.pow(unit[0].object_x - point_key[i].x - point_key[i].pos_x, 2) + Math.pow(unit[0].object_y - point_key[i].y - point_key[i].pos_y, 2), 1/2);
        let c = Math.pow(Math.pow(unit[0].object_x - point_key[i].x - point_key[i].pos_x, 2) + Math.pow(unit[0].object_y + unit[0].target_y - point_key[i].y - point_key[i].pos_y, 2), 1/2);
        let b = unit[0].radius + point_key[i].radius;
        if ((b > a) || (b > c)) 
        {
            sound_key();
            point_key.splice(i, 1);
            walls_bot.splice(walls_bot.length - 1, 1);
            walls_top.splice(walls_top.length - 1, 1);
        }
        else i++;
    }
}

function monstr_inside(i)
{
    /*let a = Math.pow(Math.pow(Math.abs(unit[0].object_x - unit[i].object_x), 2) + Math.pow(Math.abs(unit[0].object_y - unit[i].object_y), 2), 1/2);//head and head
    let b = Math.pow(Math.pow(Math.abs(unit[0].object_x - unit[i].object_x), 2) + Math.pow(Math.abs((unit[0].object_y + unit[0].target_y) - (unit[i].object_y + unit[i].target_y)), 2), 1/2);//body and body
    let c = Math.pow(Math.pow(Math.abs(unit[0].object_x - unit[i].object_x), 2) + Math.pow(Math.abs((unit[0].object_y + unit[0].target_y) - unit[i].object_y), 2), 1/2);//hero body and monstr head
    let d = Math.pow(Math.pow(Math.abs(unit[0].object_x - unit[i].object_x), 2) + Math.pow(Math.abs(unit[0].object_y - (unit[i].object_y + unit[i].target_y)), 2), 1/2);//monstr body and hero head
    let r = unit[0].radius + unit[i].radius;
    if ((d < r)||(a < r)||(b < r)||(c < r)) return false;
    else return true;*/
    return true;
}
/*function show_hide() 
{
    let doc=document.getElementById('gule_img');
    if(doc.style.display == "none") doc.style.display = "block";
    else doc.style.display = "none"
    alert('ты че');
}*/
let kill_gule  = 0;
let ghost_kill = 0;
let chest_found = 0;
let level = 1;
let kol_gule = 6;
let all_gule_kills = 0;
let all_ghost_kills = 0;
function finish()
{    
    //clearInterval('move()');
    all_gule_kills += kill_gule;
    window.scrollTo(0, screen_h * 2);
    document.getElementById('gule').innerHTML = kill_gule + '/' + kol_gule;
    document.getElementById('chest').innerHTML = '1/1';
    document.getElementById('chest_all').innerHTML = chest_found + '/3';
    document.getElementById('gule_all').innerHTML = all_gule_kills + '/18';
    
    if (level == 2)
    {
        all_ghost_kills += ghost_kill;
        document.getElementById("ghost_name").innerHTML = "призрак";
        document.getElementById("ghost_img").style.display = 'block';
        document.getElementById("ghost").innerHTML = ghost_kill + '/2';
        document.getElementById("ghost_all").innerHTML = all_ghost_kills + '/6';
    }
    
    if (level == 3)
    {
        document.getElementById('continue').innerHTML = ' ';
        document.getElementById('level').style.display = 'none';
        document.getElementById('result').innerHTML = 'игра пройдена' 
        document.getElementById('message').innerHTML = 'ждите появление босса'
    }
    if (chest_found != level) 
    {
        document.getElementById('result').innerHTML = 'поражение'
        document.getElementById('message').innerHTML = 'вы не смогли найти клад :с'
        document.getElementById('level').innerHTML = 'новая игра'
        document.getElementById('continue').innerHTML = ' ';
        clearInterval(idTimer);
    }
    else 
    {        
        document.getElementById('result').innerHTML = 'уровень ' + level + ' пройден!' 
        level += 1;
        document.getElementById('level').innerHTML = 'уровень ' + level;    
    }
    
}

