import React from 'react'

const PlanCard = () => {
  return (
    <div>
      <div class="page-section">
    <div class="container">
      <div class="text-center wow fadeInUp">
        <div class="subhead">Pricing Plan</div>
        <h2 class="title-section">Choose plan the right for you</h2>
        <div class="divider mx-auto"></div>
      </div>
      <div class="row mt-5">
        <div class="col-lg-4 py-3 wow zoomIn">
          <div class="card-pricing">
            <div class="header">
              <div class="pricing-type">Basic</div>
              <div class="price">
                <span class="dollar">$</span>
                <h1>39<span class="suffix">.99</span></h1>
              </div>
              <h5>Per Month</h5>
            </div>
            <div class="body">
              <p>25 Analytics <span class="suffix">Campaign</span></p>
              <p>1,300 Change <span class="suffix">Keywords</span></p>
              <p>Social Media <span class="suffix">Reviews</span></p>
              <p>1 Free <span class="suffix">Optimization</span></p>
              <p>24/7 <span class="suffix">Support</span></p>
            </div>
            <div class="footer">
              <a href="#" class="btn btn-pricing btn-block">Subscribe</a>
            </div>
          </div>
        </div>

        <div class="col-lg-4 py-3 wow zoomIn">
          <div class="card-pricing marked">
            <div class="header">
              <div class="pricing-type">Standar</div>
              <div class="price">
                <span class="dollar">$</span>
                <h1>59<span class="suffix">.99</span></h1>
              </div>
              <h5>Per Month</h5>
            </div>
            <div class="body">
              <p>25 Analytics <span class="suffix">Campaign</span></p>
              <p>1,300 Change <span class="suffix">Keywords</span></p>
              <p>Social Media <span class="suffix">Reviews</span></p>
              <p>1 Free <span class="suffix">Optimization</span></p>
              <p>24/7 <span class="suffix">Support</span></p>
            </div>
            <div class="footer">
              <a href="#" class="btn btn-pricing btn-block">Subscribe</a>
            </div>
          </div>
        </div>

        <div class="col-lg-4 py-3 wow zoomIn">
          <div class="card-pricing">
            <div class="header">
              <div class="pricing-type">Professional</div>
              <div class="price">
                <span class="dollar">$</span>
                <h1>99<span class="suffix">.99</span></h1>
              </div>
              <h5>Per Month</h5>
            </div>
            <div class="body">
              <p>25 Analytics <span class="suffix">Campaign</span></p>
              <p>1,300 Change <span class="suffix">Keywords</span></p>
              <p>Social Media <span class="suffix">Reviews</span></p>
              <p>1 Free <span class="suffix">Optimization</span></p>
              <p>24/7 <span class="suffix">Support</span></p>
            </div>
            <div class="footer">
              <a href="#" class="btn btn-pricing btn-block">Subscribe</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
    </div>
  )
}

export default PlanCard
