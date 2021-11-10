import { Accordion } from "react-bootstrap";
import $ from 'jquery'
import { useEffect } from "react";

function Faq() {

    useEffect(() => {
        $('li.q').on("click", function() {
            // Get next element
            $(this).next()
                .slideDown(500)
            // Select all other answers
                    .siblings('li.a')
                        .slideUp();
        });
    },[]);
  return (
    <div id="faq" className="cards-1">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <h2 className="h2-heading">Frequently asked questions</h2>
            </div> 
        </div>
        <div className="row accordion mt-4">
            <div className="col-lg-12">
{/*                 
            <ul class="faq">
                <li class="q"><i class="ion-chevron-right"></i>What does the term "Full-Tang" mean?</li>
                <li class="a">"Full-Tang" refers to knives where the blade goes all the way down through the handle to the end of the grip.</li>
                
                <li class="q"><i class="ion-chevron-right"></i>What is a bolster, and what benefits does it provide?</li>
                <li class="a">A knife bolster is the thick section between the handle and the blade, and it strengthens the knife, and gives better balance and control. However, there is much disagreement on whether or not it is necessary.</li>
                
                <li class="q"><i class="ion-chevron-right"></i>What are the differences between forged and laser-cut stamped knives?</li>
                <li class="a">Forged knives are stronger and retain their edge longer than stamped knives, which have more flexible blades. In the case of Wusthof, their forged knives go through 40 different steps in their factory, where the laser-cut knives go through 14 steps. Also, their forged knives include a bolster, which balances the knife and protects fingers, although bolsters can also be added to laser-cut knives. Laser-cut stamped knives can be of excellent quality too, however, and they are more economically priced.</li>
                
              <li class="q"><i class="ion-chevron-right"></i>How should I wash my knives?</li>
                <li class="a">Always wash them by hand with hot, soapy water. Never drop them in with a sinkful of dirty dishes, or run them through a dishwasher, which will not only bang them together, but damage the blade through excessive heating.</li>
                
                <li class="q"><i class="ion-chevron-right"></i>Do I need to spend a lot of money for knives?</li>
                <li class="a">The more you can spend, the better, but there are some less expensive options, such as Victorinox, which also make Swiss Army Knives. The blades are very sharp, and well-made for the price.</li>
                
            </ul>
  */}

            <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>FAQ  #1</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>FAQ  #2</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="2">
    <Accordion.Header>FAQ  #3</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="3">
    <Accordion.Header>FAQ #4</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="4">
    <Accordion.Header>FAQ  #5</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>

</Accordion>

          
            </div> 
        </div>
    </div> 
</div> 
  );
}

export default Faq;
