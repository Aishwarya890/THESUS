import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import  value1img from "../images/value1img.jpg";
import value2 from "../images/value2.jpg";
import value3 from "../images/value3.jpg";
import value4 from "../images/value4.jpg";
import value5 from "../images/value5.jpg";
import value6 from "../images/value6.jpg";
import value7 from "../images/value7.jpg";      
import value8 from "../images/value8.jpg";

const ValuePage = () => {
  return (
    <div className="bg-white text-dark">
      {/* Hero Section */}
      <section className="position-relative bg-light">
        <img
          src={value1img}
          alt=""
          className="w-100"
          style={{ height: "600px", objectFit: "cover"}}
        />
        <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
          {/* <h1 className="h2 fw-semibold mb-2">THESUS OUTDOORS</h1>
          <h2 className="h3 fw-bold">
            We believe that we can all do better by <br /> people and the planet
          </h2> */}
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-5 text-center container">
        <h2 className="display-4 fw-bold mb-4">Who We Are</h2>
        <p className="lead mx-auto mb-3" style={{ maxWidth: "600px" }}>
          Thesus is a socially and environmentally progressive brand of outdoor
          footwear and accessories. We are made up of a small ragtag band of
          industry outsiders from around the world.
        </p>
        <p className="lead mx-auto" style={{ maxWidth: "600px" }}>
          We have big imaginations but we listen, think, and act carefully. We
          believe that positive change happens when even simple ideas are given
          wings. Our ideas are brought to life through connection, commitment,
          and design simplicity.
        </p>
      </section>

      {/* Where We Are Section */}
      <section className="position-relative bg-light">
        <img
          src={value2}
          alt="Tree background"
          className="w-100"
          style={{ height: "400px", objectFit: "cover" }}
        />
        <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
          <h2 className="display-4 fw-bold">Where We Are</h2>
          <p className="lead mt-3 mx-auto" style={{ maxWidth: "600px" }}>
            Thesus HQ is in Toronto, Canada. We acknowledge the Mississaugas of
            New Credit, the Haudenosaunee, and Huron-Wendat First Nations, the
            original keepers of this land that hosts us.
          </p>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-5 container">
        <h2 className="display-4 fw-bold text-center mb-5">Our Values</h2>
        <div className="row">
          {/* Connection */}
          <div className="col-md-4 text-center">
            <h3 className="h4 fw-semibold">Connection</h3>
            <p className="mt-3">
              We connect with the best producers in the world, those with
              generational knowledge and those who also share our values of
              accountability, transparency and sustainability. We stay in the
              region, we break bread, we laugh and share stories, we get to know
              the culture and community, and most importantly, we work closely to
              make better shoes, for People and the Planet.
            </p>
          </div>
          {/* Community */}
          <div className="col-md-4 text-center">
            <h3 className="h4 fw-semibold">Community</h3>
            <p className="mt-3">
              Our commitment centers around ensuring that the People and the
              Planet are considered at every stage of our value chain. We have
              aligned ourselves with the United Nations Sustainable Development
              Goals to make sure we are always at the forefront of addressing
              important issues like Ocean Pollution, Climate Change and Economic
              Inequalities.
            </p>
          </div>
          {/* Good Design */}
          <div className="col-md-4 text-center">
            <h3 className="h4 fw-semibold">Good Design</h3>
            <p className="mt-3">
              We believe in good design as a way of reducing waste. We focus on
              what matters: material make-up, design simplicity, sustainability,
              quality, comfort and functional integrity. We create versatile shoes
              that you actually want to wear, on-or-off the trail year round.
            </p>
          </div>
        </div>
      </section>

      {/* Image & Transparency Section */}
      <section className="bg-white text-dark">
        {/* Image Section */}
        <div className="position-relative w-100" style={{ height: "500px" }}>
          <img
            src={value3}
            alt="Hugging Tree"
            className="w-100 h-100"
            style={{ objectFit: "cover" }}
          />
        </div>
        {/* Transparency Text Section */}
        <div className="text-center py-5 container">
          <h2 className="display-4 fw-bold mb-4">Transparency</h2>
          <p className="lead mx-auto mb-3" style={{ maxWidth: "600px" }}>
            At Thesus we believe that honesty and transparency are the most
            important drivers in ensuring progress is made for People and the
            Planet. We reveal our entire materials list on each product page, so
            there are no questions left unanswered.
          </p>
          <p className="lead mx-auto" style={{ maxWidth: "700px" }}>
            We are always looking to be better at what we do. That means, we are
            constantly on the lookout for new and innovative materials and
            partners. If you have any suggestions or direction, please reach out
            to us at support@thesusoutdoors.com.
          </p>
        </div>
      </section>

      {/* Diversity & Inclusion Section */}
      <section className="py-5 container">
        <div className="row align-items-center">
          {/* Image on the Left */}
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="position-relative overflow-hidden rounded shadow">
              <img
                src={value4}
                alt="Diversity and Inclusion"
                className="w-100"
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>
          </div>
          {/* Text on the Right */}
          <div className="col-md-6">
            <h2 className="display-4 fw-bold mb-4">
              Diversity &amp; Inclusion
            </h2>
            <p className="lead mb-3">
              Thesus is proudly BIPOC woman-owned, and women-led, and we will
              continue to ensure diversity in all ranks as we grow.
            </p>
            <p className="lead">
              We are dedicated to achieving the best practices for equitable
              hiring, growth, and pay for every team member and committed to
              ensuring that diversity of size, race, and gender/sexuality is being
              celebrated internally and externally.
            </p>
          </div>
        </div>
      </section>

      {/* 100% Living Wage Section */}
      <section className="py-5 container">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-md-6">
            <h2 className="display-4 fw-bold mb-4">
              100% Living Wage
            </h2>
            <p className="lead mb-3">
              We believe that living wages are at the center of our quality of
              life as communities. We want to ensure that we provide a supportive
              environment so that people lead happier and healthier lives.
            </p>
            <p className="lead">
              At Thesus, 100% of our current staff and staff of our direct
              manufacturers, are paid a living wage.
            </p>
          </div>
          {/* Image Section */}
          <div className="col-md-6">
            <div className="position-relative overflow-hidden rounded shadow">
              <img
                src={value5}
                alt="Living Wage"
                className="w-100"
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Production Section */}
      <section className="py-5 container">
        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="position-relative overflow-hidden rounded shadow">
              <img
                src={value6}
                alt="Production Process"
                className="w-100"
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>
          </div>
          {/* Text Section */}
          <div className="col-md-6">
            <h2 className="display-4 fw-bold mb-4">Production</h2>
            <p className="lead mb-3">
              At Thesus we commit to working in regions in the world that have
              overarching systems and good governance in place to support a
              decent standard of living. We spend months finding the right people
              to partner with, live in the regions, and build friendships with
              their teams.
            </p>
            <p className="lead mb-3">
              To form partnerships with factories, we move to the regions where we
              operate. Our founders get to know the owners and employees and take
              the time to understand their current sustainability standards and
              future ambitions for how we can together work toward operating
              within planetary boundaries, centering community wellbeing and the
              planet. This process is a personal one, that takes the vetting process
              well beyond certifications and helps to ensure we are partnering with
              suppliers whose values are already in alignment with Thesus’ goals of
              operating within planetary boundaries with a focus on nature based
              solutions.
            </p>
            <p className="lead fw-semibold mb-3">
              As of July 2022, we have moved 100% of our production to Portugal,
              beating our goal of an HDI rank by 3%, achieving an HDI of 0.864.
            </p>
            <p className="lead mb-3">
              For more information about our production, check out our factories:
            </p>
            <ul className="list-unstyled">
              <li className="mb-2">
                • Calcado Netos (São João da Madeira, Portugal)
              </li>
              <li className="mb-2">• Calcado Albano (Vizela, Portugal)</li>
              <li className="mb-2">
                • Calçado Eurovilde (Felgueiras, Portugal)
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Climate Positive Section */}
      <section className="py-5 container">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-md-6">
            <h2 className="display-4 fw-bold mb-4">
              Climate Positive
            </h2>
            <p className="lead">
              We are not neutral when it comes to climate change. We are aiming to
              be regenerative in all of our activities, meaning, we want to be
              Climate Positive in all of our activities.
            </p>
          </div>
          {/* Image Section */}
          <div className="col-md-6">
            <div className="position-relative overflow-hidden rounded shadow">
              <img
                src={value7}
                alt="Climate Positive"
                className="w-100"
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Diverting Waste Section */}
      <section className="py-5 container">
        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="position-relative overflow-hidden rounded shadow">
              <img
                src={value8}
                alt="Diverting Waste"
                className="w-100"
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>
          </div>
          {/* Text Section */}
          <div className="col-md-6">
            <h2 className="display-4 fw-bold mb-4">
              Diverting Waste
            </h2>
            <p className="lead">
              At Thesus we are committed to making footwear that has a positive
              environmental impact on the world. We do this by taking the time to
              research materials; natural materials that have been used for millennia,
              as well as new and innovative materials that have a net positive impact
              on the world around us.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ValuePage;
