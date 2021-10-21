
    <div class="top-advantage">
        <div class="text-center">
          <h2>Ventajas de usar L'SL</h2>
        </div>
        <br />
        <div class="box-advantage">
          <div class="card-advantage">
            <h4>Title</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, magni
              blanditiis neque error
            </p>
          </div>
          <div class="card-advantage">
            <h4>Title</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, magni
              blanditiis neque error
            </p>
          </div>
          <div class="card-advantage">
            <h4>Title</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, magni
              blanditiis neque error
            </p>
          </div>
          <div class="card-advantage">
            <h4>Title</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, magni
              blanditiis neque error
            </p>
          </div>
        </div>
      </div>
    
    
    <style>
    
    /* BOX ADVANTAGE */
    
    .box-advantage {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    }
    
    .card-advantage {
      width: 300px;
      height: 140px;
      padding: 10px;
      border: 0.4px solid rgb(229, 228, 238);
      transition: 0.3s;
      cursor: pointer;
    }
    .card-advantage > h4{
      font-size: 18px;
    }
    
    .card-advantage > p{
      font-size: 16px;
    }
    
    .card-advantage:hover {
      transition: 0.3s;
      border: 0.4px solid transparent;
      box-shadow: rgb(0 0 0 / 10%) 0px 4px 14px 0px;
    }
    
    /* MOBILE */
    @media (max-width: 600px) {
      .top-advantage {
        margin-top: 330px;
      }
      .box-advantage {
      margin-left: 15%;
      }
    }
    /* DESKTOP */
    @media (min-width: 1025px) {
      .box-advantage {
      margin-left: 2%;
      }
    }
    </style>