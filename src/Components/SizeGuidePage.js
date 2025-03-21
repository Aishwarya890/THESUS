import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import footImage from "../images/footSize.png"

const SizeGuidePage = () => {
  return (
    <div className="container my-5"><br></br><br></br><br></br>
      {/* Page Title */}
      <h1 className="mb-4 fw-bold text-center">Thesus™ Footwear Size Guide</h1>

      {/* Intro Section */}
      <div className="row mb-5">
        <div className="col-md-3 text-center mb-3 mb-md-0">
          {/* Replace with your actual foot measurement image */}
          <img
            src={footImage}
            alt="Foot Measurement"
            className="img-fluid"
            style={{ maxHeight: "250px", objectFit: "contain" }}
          />
        </div>
        <div className="col-md-9">
          <p>
            We always recommend measuring your foot length to ensure you find
            your best fit. To best find the length of your foot, measure a
            straight line from the tip of your big toe to the end of your heel.
          </p>
          <ul className="list-unstyled" style={{ color: "rgba(0, 0, 0, 0.7)", listStyleType: "disc", paddingLeft: "20px" }}>
  <li>
    <a href="#weekend-boot" style={{ color: "rgba(0, 0, 0, 0.7)", textDecoration: "underline" }}>
      The Weekend Boot™ Size Guide
    </a>
  </li>
  <li>
    <a href="#modern-winter-boot" style={{ color: "rgba(0, 0, 0, 0.7)", textDecoration: "underline" }}>
      The Modern Winter Boot™ Size Guide
    </a>
  </li>
  <li>
    <a href="#anyday-rain-boot" style={{ color: "rgba(0, 0, 0, 0.7)", textDecoration: "underline" }}>
      The Anyday Rain Boot™ Size Guide
    </a>
  </li>
  <li>
    <a href="#terrus-clog" style={{ color: "rgba(0, 0, 0, 0.7)", textDecoration: "underline" }}>
      The Terrus™ Clog Size Guide
    </a>
  </li>
</ul>

        </div>
      </div>

      {/* Weekend Boot Section */}
      <section id="weekend-boot" className="mb-5">
        <h2 className="h4 fw-bold">The Weekend Boot™ Size Guide</h2>
        <p>
          Our Weekend Boots™ are perfect for all foot widths as the laces can be
          tightened or loosened accordingly. They are true to size, however, you
          may want to size up to provide extra wiggle room for a thicker sock.
        </p>

        {/* Size Table */}
        <div className="table-responsive">
          <table className="table table-bordered text-center align-middle">
            <thead className="table-light">
              <tr>
                <th>EU</th>
                <th>Length (cm)</th>
                <th>USA (womens)</th>
                <th>USA (mens)</th>
                <th>UK</th>
              </tr>
            </thead>
            <tbody>
              {/* Replace these rows with your actual size data */}
              <tr>
                <td>36</td>
                <td>23.38</td>
                <td>5.5</td>
                <td>3</td>
                <td>3</td>
              </tr>
              <tr>
                <td>37</td>
                <td>24.04</td>
                <td>6</td>
                <td>4</td>
                <td>4</td>
              </tr>
              <tr>
                <td>38</td>
                <td>24.71</td>
                <td>7</td>
                <td>5</td>
                <td>5</td>
              </tr>
              <tr>
                <td>39</td>
                <td>25.37</td>
                <td>8</td>
                <td>6</td>
                <td>6</td>
              </tr>
              <tr>
                <td>40</td>
                <td>26.04</td>
                <td>8.5</td>
                <td>7</td>
                <td>6.5</td>
              </tr>
              <tr>
                <td>41</td>
                <td>26.71</td>
                <td>9</td>
                <td>8</td>
                <td>7</td>
              </tr>
              <tr>
                <td>42</td>
                <td>27.37</td>
                <td>10</td>
                <td>9</td>
                <td>8</td>
              </tr>
              <tr>
                <td>43</td>
                <td>28.04</td>
                <td>10.5</td>
                <td>9.5</td>
                <td>8.5</td>
              </tr>
              <tr>
                <td>44</td>
                <td>28.71</td>
                <td>11</td>
                <td>10</td>
                <td>9</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Fit Tips */}
        <h3 className="h5 fw-bold mt-4">Weekend Boot™ Fit Tips</h3>
        
          <p>→ Our Weekend Boots™ are made for all foot widths narrow to wide.</p>
          <p>→ They run true to size.</p>
          <p>→ If you are in between sizes, size up.</p>
          <p>
          → Make sure you try them on with a thicker sock and that your toes
            aren’t hitting the front of the boot when you walk.
          </p>
          <p>
          → If you still need a little more wiggle room, you can replace our
            thick removable insole with a thinner option to get a bit more space.
          </p>
          <p>
          → They may take about 3–5 wears before giving way to the unique shape
            of your foot. To avoid blisters, make sure you break them in before
            heading out on a longer, or more intense, walk.
          </p>
        
      </section>
      <section>
      <h3 className="h5 fw-bold mt-4">Weekend Boot™ Fit Testimonials</h3>
        
          <p>Olivia - Normal Width, Winter Wear</p>
          <p>"I've got a normal width foot, and usually take a 7 US. The size 38s fit me perfectly with a thick sock."</p>
          <p>Mila - Wide Width, Day Hiker</p>
          <p>
          "I've got a wider sized foot, and I found that the laces really helped provide the perfect fit. I'm generally an 8 US and the 39s fit me well with a bit room for the ups and downs of a light day hike."
          </p>
          <p>
          Stella - Narrow Width, City Wear
          </p>
          <p>
          "My feet are quite narrow, and I'm always a 7.5 US in my boots. I got the size 38s and they fit perfectly. I wear them around town, grocery shopping, and walking my dog."
          </p>
      </section>
      

      {/* Example placeholders for other sections you may have: */}
      <section id="modern-winter-boot" className="mb-5">
        <h2 className="h4 fw-bold">The Modern Winter Boot™ Size Guide</h2>
        <p>
          {/* Add your text for Modern Winter Boot here */}
          Our Modern Winter Boots™ are perfect for all foot widths as the laces
          can be tightened or loosened accordingly. They are true to size,
          however, you may want to size up to provide extra wiggle room for a
          thicker sock.
        </p>
        {/* Size Table */}
        <div className="table-responsive">
          <table className="table table-bordered text-center align-middle">
            <thead className="table-light">
              <tr>
                <th>EU</th>
                <th>Length (cm)</th>
                <th>USA (womens)</th>
                <th>USA (mens)</th>
                <th>UK</th>
              </tr>
            </thead>
            <tbody>
              {/* Replace these rows with your actual size data */}
              <tr>
                <td>36</td>
                <td>23.38</td>
                <td>5.5</td>
                <td>3</td>
                <td>3</td>
              </tr>
              <tr>
                <td>37</td>
                <td>24.04</td>
                <td>6</td>
                <td>4</td>
                <td>4</td>
              </tr>
              <tr>
                <td>38</td>
                <td>24.71</td>
                <td>7</td>
                <td>5</td>
                <td>5</td>
              </tr>
              <tr>
                <td>39</td>
                <td>25.37</td>
                <td>8</td>
                <td>6</td>
                <td>6</td>
              </tr>
              <tr>
                <td>40</td>
                <td>26.04</td>
                <td>8.5</td>
                <td>7</td>
                <td>6.5</td>
              </tr>
              <tr>
                <td>41</td>
                <td>26.71</td>
                <td>9</td>
                <td>8</td>
                <td>7</td>
              </tr>
              <tr>
                <td>42</td>
                <td>27.37</td>
                <td>10</td>
                <td>9</td>
                <td>8</td>
              </tr>
              <tr>
                <td>43</td>
                <td>28.04</td>
                <td>10.5</td>
                <td>9.5</td>
                <td>8.5</td>
              </tr>
              <tr>
                <td>44</td>
                <td>28.71</td>
                <td>11</td>
                <td>10</td>
                <td>9</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Include a similar table and tips if needed */}
      </section>

      <section id="anyday-rain-boot" className="mb-5">
        <h2 className="h4 fw-bold">The Anyday Rain Boot™ Size Guide</h2>
        <p>
          {/* Add your text for Anyday Rain Boot here */}
          Our rain boots run narrow. For so we do recommend to size up. 
        </p>
        <p>If you wear wide shoes or have high arches, these boots may not be for you.</p>
        {/* Include a similar table and tips if needed */}
        {/* Size Table */}
        <div className="table-responsive">
          <table className="table table-bordered text-center align-middle">
            <thead className="table-light">
              <tr>
                <th>EU</th>
                <th>Length (cm)</th>
                <th>USA (womens)</th>
                <th>USA (mens)</th>
                <th>UK</th>
              </tr>
            </thead>
            <tbody>
              {/* Replace these rows with your actual size data */}
              <tr>
                <td>36</td>
                <td>23.38</td>
                <td>5.5</td>
                <td>3</td>
                <td>3</td>
              </tr>
              <tr>
                <td>37</td>
                <td>24.04</td>
                <td>6</td>
                <td>4</td>
                <td>4</td>
              </tr>
              <tr>
                <td>38</td>
                <td>24.71</td>
                <td>7</td>
                <td>5</td>
                <td>5</td>
              </tr>
              <tr>
                <td>39</td>
                <td>25.37</td>
                <td>8</td>
                <td>6</td>
                <td>6</td>
              </tr>
              <tr>
                <td>40</td>
                <td>26.04</td>
                <td>8.5</td>
                <td>7</td>
                <td>6.5</td>
              </tr>
              <tr>
                <td>41</td>
                <td>26.71</td>
                <td>9</td>
                <td>8</td>
                <td>7</td>
              </tr>
              <tr>
                <td>42</td>
                <td>27.37</td>
                <td>10</td>
                <td>9</td>
                <td>8</td>
              </tr>
              <tr>
                <td>43</td>
                <td>28.04</td>
                <td>10.5</td>
                <td>9.5</td>
                <td>8.5</td>
              </tr>
              <tr>
                <td>44</td>
                <td>28.71</td>
                <td>11</td>
                <td>10</td>
                <td>9</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section>
      <h3 className="h5 fw-bold mt-4">Anyday Rain Boot™ Fit Tips</h3>
        <p>→ Our Rain Boots generally run narrow, so we do recommend to size up.</p>
        <p>→ If you wear wide shoes or have high arches, these boots may not be for you.</p>
      </section>

      <section>
      <h3 className="h5 fw-bold mt-4">Anyday Rain Boot™ Fit Tips</h3><br></br>
      <h5>Sarah - Normal Width, City Wear</h5>
        <p>"I have a normal width foot, and I'm usually between a 6.5-7. I went with the 37s and they fit perfectly with a thin sock. With my thicker socks on colder days, I just remove the insole for some extra room."</p>
        <br></br>
        <h5>Alanna - Wide Width, Commuter</h5>
        <p>"I was nervous about getting these with a wider set foot, but I sized up one full size as recommended, and they fit really well."</p>
        <br></br>

        <h5>Patricia - Narrow Width, Gardener </h5>
        <p>"My feet are naturally quite narrow, so I stuck to my normal size (39). They fit like a glove, and I love them for when I'm gardening!"</p>
       
      </section><br></br> <br></br>

      <section id="terrus-clog" className="mb-5">
        <h2 className="h4 fw-bold">The Terrus™ Clog Size Guide</h2>
        <p>
          {/* Add your text for Terrus Clog here */}
          We always recommend measuring your foot length to ensure you find your
          best fit. 
        </p>
        <p>The Terrus™ is perfect for all foot widths as the wide
        footbed and toe box provides a comfy + roomy feel.</p>
        {/* Size Table */}
        <div className="table-responsive">
          <table className="table table-bordered text-center align-middle">
            <thead className="table-light">
              <tr>
                <th>EU</th>
                <th>Length (cm)</th>
                <th>USA (womens)</th>
                <th>USA (mens)</th>
                <th>UK</th>
              </tr>
            </thead>
            <tbody>
              {/* Replace these rows with your actual size data */}
              <tr>
                <td>36</td>
                <td>23.38</td>
                <td>5.5</td>
                <td>3</td>
                <td>3</td>
              </tr>
              <tr>
                <td>37</td>
                <td>24.04</td>
                <td>6</td>
                <td>4</td>
                <td>4</td>
              </tr>
              <tr>
                <td>38</td>
                <td>24.71</td>
                <td>7</td>
                <td>5</td>
                <td>5</td>
              </tr>
              <tr>
                <td>39</td>
                <td>25.37</td>
                <td>8</td>
                <td>6</td>
                <td>6</td>
              </tr>
              <tr>
                <td>40</td>
                <td>26.04</td>
                <td>8.5</td>
                <td>7</td>
                <td>6.5</td>
              </tr>
              <tr>
                <td>41</td>
                <td>26.71</td>
                <td>9</td>
                <td>8</td>
                <td>7</td>
              </tr>
              <tr>
                <td>42</td>
                <td>27.37</td>
                <td>10</td>
                <td>9</td>
                <td>8</td>
              </tr>
              <tr>
                <td>43</td>
                <td>28.04</td>
                <td>10.5</td>
                <td>9.5</td>
                <td>8.5</td>
              </tr>
              <tr>
                <td>44</td>
                <td>28.71</td>
                <td>11</td>
                <td>10</td>
                <td>9</td>
              </tr>
            </tbody>
          </table>
        </div>
        <section>
      <h3 className="h5 fw-bold mt-4">Terrus™ Clog Fit Tips</h3><br></br>
        <p>→ True to size (with room for woolly socks on cool days).</p>
        <p>→ Perfect fit for wider feet! The Terrus™ is made with loads of room for your toes to get the much-needed space they deserve.</p>
        <p>→ Use the adjustable straps to make sure your foot feels safe and secure while walking on inclines or rocky terrain.</p>
        <p>→ The Terrus™ is comfy right out of the box. For longer or more intense walks, its best to get a few wears in to make sure you are comfy along the way.</p>
      </section><br></br>

      <section>
      <h3 className="h5 fw-bold mt-4">Terrus™ Clog Fit Testimonials</h3><br></br>
      <h5>Becca - Normal Width, City Wear</h5>
        <p>"I have a normal width foot, and I'm a 9.5. I went with the 40s and they fit perfectly with a thick sock."</p>
        <br></br>

        <h5>Alanna - Wide Width, Commuter</h5>
        <p>"I was nervous about getting these with a wider set foot, but I sized up one full size as recommended, and they fit really well."</p>
           <br></br>

        <h5>Patricia - Narrow Width, Gardener </h5>
        <p>"My feet are naturally quite narrow, so I stuck to my normal size (39). They fit like a glove, and I love them for when I'm gardening!"</p>
       
      </section>
        
        {/* Include a similar table and tips if needed */}
      </section>
    </div>
  );
};

export default SizeGuidePage;
