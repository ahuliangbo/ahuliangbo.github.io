<template>
  <h2>Hi 👋</h2>
  I'm Khang! I'm currently studying Computer Science at the University of Texas at Austin. I'm helping organize hackathons with the <a href="https://freetailhackers.com">Freetail Hackers</a>.
  I am passionate about frontend development and creating a great user experience
  <br><br>
  <h3>I also enjoy learning guitar and piano!<br>Here are the songs I've been learning.</h3>
  <ul>
    <li>
      <img draggable=false src="/albums/Imperfect.jpg"/>
      <b>Missing Ling</b>
      <span>Ling Toshite Sigure</span>
      <span>In-progress</span>
    </li>
    <li>
      <img draggable=false src="/albums/OKComputer.jpg"/>
      <b>No Surprises</b>
      <span>Radiohead</span>
      <span>Done</span>
    </li>
    <li>
      <img draggable=false src="/albums/OKComputer.jpg"/>
      <b>Ending Music<br>(for a film)</b>
      <span>Radiohead</span>
      <span>Done</span>
    </li>
    <li>
      <img draggable=false src="/albums/Genso.jpg"/>
      <b>Hisoyaka ni</b>
      <span>Lamp</span>
      <span>In-progress</span>
    </li>
    <li>
      <img draggable=false src="/albums/The Bends.jpg"/>
      <b>Nice Dream</b>
      <span>Radiohead</span>
      <span>Done</span>
    </li>
    <li>
      <img draggable=false src="/albums/End of Evangelion.jpg"/>
      <b>Heisoku no Kakudai</b>
      <span>Shiro Sagisu</span>
      <span>Done</span>
    </li>
    <li>
      <img draggable=false src="/albums/NG Evangelion.jpg"/>
      <b>Rei I</b>
      <span>Shiro Sagisu</span>
      <span>Done</span>
    </li>
    <li>
      <img draggable=false src="/albums/Alter Ego.jpg"/>
      <b>Ghost of a Smile</b>
      <span>Egoist</span>
      <span>Done</span>
    </li>
  </ul>
</template>

<style scoped>
  ul {
    transform-style: preserve-3d;
    perspective: 100px;
    list-style: none;
    padding: 0;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1em;
  }
  li {
    display: flex;
    flex-direction: column;
    width: 10em;
    padding: 0.5em;
    text-align: left;
    background: var(--foreground);
    color: var(--background);
    line-height: 1.2;
    transition: box-shadow 0.5s, transform 0.5s;
  }
  li span {
    font-size: 0.7rem;
  }
  li:hover {
    box-shadow: 0 0 1em #000000aa;
    transform: translateZ(2px);
    transition: box-shadow 0.25s, transform 0.25s;
  }
  li img {
    user-select: none;
  }
</style>