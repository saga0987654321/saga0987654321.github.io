<script>
  let clicks = 0;
  let multiplier = 1;
  let workers = [];
  let worker_multiplier = 1;
  let intervalId = []; 
  let cost_multiplier = 1




  let upgrades = [
    { cost: 20 * cost_multiplier, name: "Doubler", multiplier: 2, worker: 0 },
    { cost: 10 * cost_multiplier, name: "Worker", multiplier: 0, worker: 1 },
  ];

  function increment() {
    clicks = clicks + multiplier;
  }
</script>



<button class="reset"   on:click={() => {
  clicks = 0;
  multiplier = 1;
  workers = [];
  worker_multiplier = 1;
  console.log("reset")
  intervalId.forEach(id => {
    clearInterval(id)
    
  });
  upgrades = [
    { cost: 20, name: "Doubler", multiplier: 2, worker: 0 },
    { cost: 10, name: "Worker", multiplier: 0, worker: 1 },
  ];
}}>
	Reset
</button>


<article>
  <header>
    <div class="grid">
      {#each upgrades as upgrade,i}
        <button
          class="upgrade"
          on:click={() => {
            if (clicks >= upgrade.cost) {
              if (upgrade.multiplier) {
                multiplier = multiplier * upgrade.multiplier;
                clicks -= upgrade.cost;                
              }
              if (upgrade.worker && clicks) {
                worker_multiplier = worker_multiplier * 1;
                workers = [upgrade.name, ...workers];
                /* start "clicking" every 1000 ms */
                intervalId.push(setInterval(increment, 1000));
                clicks -= upgrade.cost;
               
              }
              upgrades[i].cost=upgrades[i].cost*2
            } else {
              alert("Click some more first!");
            }
          }}
        >
          <span>{upgrade.name}</span>
          <span>{upgrade.cost * worker_multiplier}</span>
        </button>
      {/each}
    </div>
  </header>
  <div class="game">
    <button on:click={increment} class="clicker">
      <span class="clicks">{clicks}</span>
      <span class="pointtext">PPC: {multiplier}</span>
    </button>
  </div>
  <footer>
    <div class="panelright">
      <div>
        <header>Clicks: {clicks}</header>
        <span>Workers: {workers.length}</span>
        <hr />
        <div class="shop">
          {#each workers as worker}
            <div class="worker">{worker}</div>
          {/each}
        </div>
      </div>
      <hr />
    </div>
  </footer>
</article>

<style>

 .reset{
  border: 4px solid rgb(45, 51, 101);
  background-color: rgb(69, 170, 232);
 }
 .reset:hover{
  border:5px solid rgb(255, 255, 255);
  color: rgb(221, 223, 237);
 }
  .shop {
    display: grid;
    grid-auto-flow: row; /* default */
    gap: 8px;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
  }

  .upgrade {
    width: 100%;
    height: 100%;
    border: 4px solid rgb(45, 51, 101);
    background-color: rgb(255, 255, 255);
    background-size: cover;
    background-image: url("https://sawwwnewsprodnortheu001.blob.core.windows.net/cache/c/f/1/d/4/4/cf1d441d077fc22d0991384901440e81ac4bce88.jpg");
    place-items: center;
    place-content: center;
    display: flex;
    flex-direction: column;
  }
  .upgrade:hover{
    border:5px solid rgb(255, 255, 255);
    color: rgb(221, 223, 237);
  }

  .worker {
    width: 100%;
    height: 100%;
    border: 2px solid rgb(45, 51, 101);
    background-color: rgb(69, 170, 232);
    background-image: url("");
    background-position: -2000px -60px;
    place-items: center;
    place-content: center;
    display: flex;
  }
  

  .game {
    height: 55vh;
    display: flex;
    flex-direction: column;
    place-items: center;
    place-content: center;
  }
  .clicker {
    clip-path: circle();
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    place-items: center;
    place-content: center;
    background-image: url("https://dinnerthendessert.com/wp-content/uploads/2019/02/M_M-Cookies-1.jpg");
    background-size: cover;
    background-position: 60px -600px;
  }
    .clicker:hover{
      border: 5px solid rgb(255, 255, 255);
      color: rgb(221, 223, 237);
    }

    
  .panelright {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .clicks {
    font-size: 100px;
  }
  .clicks:hover{
    color: rgb(221, 223, 237);
  }

  .pointtext {
    color: rgb(45, 51, 101);
    font-size: 25px;
    font-weight: bold;
  }


</style>
