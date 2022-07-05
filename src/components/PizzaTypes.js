import React from 'react';

function PizzaTypes({ title }) {
  return (
    <div class='container pizza-types'>
      <div class='row'>
        <h3 class='text-center'>{title} Types</h3>
        <div class='col-md-3'>
          <div class='thumbnail'>
            <img src='/images/getulio-moraes-Wz3u9_GtkWc-unsplash.jpg' alt='' />
            <div class='caption'>
              <h3>Pepperoni Pizza</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae ipsa facilis molestiae fugit nam cupiditate
                distinctio modi natus laboriosam omnis.
              </p>
            </div>
          </div>
        </div>
        <div class='col-md-3'>
          <div class='thumbnail'>
            <img
              src='/images/sheri-silver-A4EtgLN1_Fw-unsplash.jpg'
              alt='Vegan'
            />
            <div class='caption'>
              <h3>Vegan Pizza</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae ipsa facilis molestiae fugit nam cupiditate
                distinctio modi natus laboriosam omnis.
              </p>
            </div>
          </div>
        </div>
        <div class='col-md-3'>
          <div class='thumbnail'>
            <img
              src='/images/quin-engle-lHUdfk5WGXc-unsplash.jpg'
              alt='Cheese'
            />
            <div class='caption'>
              <h3>Chesse Pizza</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae ipsa facilis molestiae fugit nam cupiditate
                distinctio modi natus laboriosam omnis.
              </p>
            </div>
          </div>
        </div>
        <div class='col-md-3'>
          <div class='thumbnail'>
            <img
              src='/images/jonas-kakaroto-zlKdLdMREtE-unsplash.jpg'
              alt='Bossu'
            />
            <div class='caption'>
              <h3>Bossu Pizza</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae ipsa facilis molestiae fugit nam cupiditate
                distinctio modi natus laboriosam omnis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PizzaTypes;
