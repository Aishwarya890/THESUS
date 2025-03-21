import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import footImage from "../images/footSize.png"

const SizeGuidePage = () => {
  return (
    <div className="container my-5"><br></br><br></br><br></br>
      {/* Page Title */}
      <h1 className="mb-4">Thesus™ Footwear Size Guide</h1>

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
          <ul className="list-unstyled">
            <li>
              <a href="#weekend-boot">The Weekend Boot™ Size Guide</a>
            </li>
            <li>
              <a href="#modern-winter-boot">The Modern Winter Boot™ Size Guide</a>
            </li>
            <li>
              <a href="#anyday-rain-boot">The Anyday Rain Boot™ Size Guide</a>
            </li>
            <li>
              <a href="#terrus-clog">The Terrus™ Clog size guide</a>
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
        <ul>
          <li>Our Weekend Boots™ are made for all foot widths narrow to wide.</li>
          <li>They run true to size.</li>
          <li>If you are in between sizes, size up.</li>
          <li>
            Make sure you try them on with a thicker sock and that your toes
            aren’t hitting the front of the boot when you walk.
          </li>
          <li>
            If you still need a little more wiggle room, you can replace our
            thick removable insole with a thinner option to get a bit more space.
          </li>
          <li>
            They may take about 3–5 wears before giving way to the unique shape
            of your foot. To avoid blisters, make sure you break them in before
            heading out on a longer, or more intense, walk.
          </li>
        </ul>
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
        {/* Include a similar table and tips if needed */}
      </section>

      <section id="anyday-rain-boot" className="mb-5">
        <h2 className="h4 fw-bold">The Anyday Rain Boot™ Size Guide</h2>
        <p>
          {/* Add your text for Anyday Rain Boot here */}
          Our rain boots run narrow. For so we do recommend to size up. If you
          wear wide shoes or have high arches, these boots may not be for you.
        </p>
        {/* Include a similar table and tips if needed */}
      </section>

      <section id="terrus-clog" className="mb-5">
        <h2 className="h4 fw-bold">The Terrus™ Clog Size Guide</h2>
        <p>
          {/* Add your text for Terrus Clog here */}
          We always recommend measuring your foot length to ensure you find your
          best fit. The Terrus™ is perfect for all foot widths as the wide
          footbed and toe box provides a comfy + roomy feel.
        </p>
        {/* Include a similar table and tips if needed */}
      </section>
    </div>
  );
};

export default SizeGuidePage;
