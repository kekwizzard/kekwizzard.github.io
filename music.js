let main_sound, main_length, ice_bool, ice_interval;
main_sound = true;
ice_bool = true;

function main_theme()
{
    if (!main_sound) return;
    music();
    setInterval('music()', 288000)
    main_sound = false;
}

function music()
{
    let b = new Audio();
    b.src = 'main_theme.mp3';
    b.volume = 0.5;
    b.play()
}

function sound_boom()
{
    let b = new Audio();
    b.src = 'boom.wav';    
    b.volume = 0.5;
    b.play()
}

function take_damage_h()
{
    let b = new Audio();
    b.src = 'hero_atacked.mp3';    
    b.volume = 1;
    b.play()
}

function sound_key()
{
    let b = new Audio();
    b.src = 'key.wav';    
    b.volume = 0.9;
    b.play()
}
