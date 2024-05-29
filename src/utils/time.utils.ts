
export function secondsToTimeString(seconds: number): string {
    const m = ~~(seconds / 60);
    let mStr = m.toString();
    if(m < 10) 
        mStr = mStr.padStart(2,'0');

    const s = seconds % 60;
    let sStr = s.toString();
    if(s < 10)
        sStr = sStr.padStart(2,'0');

    return `${mStr}:${sStr}`;
}
