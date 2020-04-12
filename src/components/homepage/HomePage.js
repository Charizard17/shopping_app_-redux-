import React, { Component } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import '../../App.css';

export default class HomePage extends Component {
  render() {
    const images = [
      {
        url:
          "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1308&q=80",
      },
      {
        url:
          "https://images.unsplash.com/photo-1559070169-a3077159ee16?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      },
      {
        url:
          "https://images.unsplash.com/photo-1462027559830-07efc3819182?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1491&q=80",
      },
      {
        url:
          "https://images.unsplash.com/photo-1445365914510-acada0e7693d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
      },
      {
        url:
          "https://images.unsplash.com/photo-1550895598-ea72ab9a20c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      },
      {
        url:
          "https://images.unsplash.com/photo-1492531622965-b556ff0402df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      },
      {
        url:
          "https://images.unsplash.com/photo-1491622652925-46646d8a603d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1447&q=80",
      },
    ];

    return (
      <div className="divClass">
        <h1>Lorem ipsum dolor sit amet.</h1>
        <i className="fas fa-utensils"></i>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas odio
          nihil accusantium est, minima totam accusamus eos dolor excepturi
          alias illo numquam doloribus facilis molestiae natus aperiam corrupti
          aliquid fugit.
        </h2>
        <br />
        <br />
        <SimpleImageSlider width={896} height={554} images={images} />
        <br />
        <br />
        <br />
        <h2>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
          distinctio explicabo repellendus natus laudantium id nostrum enim,
          nesciunt quaerat? Adipisci deleniti ab nobis odit voluptates magni
          sint pariatur at earum!
        </h2>

        <h3>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit ab rem,
          possimus assumenda tempora ducimus quod sint aperiam. Provident
          maiores inventore vitae ullam? Necessitatibus ad iusto consequatur
          maiores reprehenderit quia.
        </h3>
      </div>
    );
    
  }
}
