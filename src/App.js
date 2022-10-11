import React from 'react'
import {useState,useEffect} from "react"
import img from './img/right1.jpg'

function App() {

  
   return (
    <div className="App">
     <div id="__next">
    <div class="resumo_fn_wrapper">
      <div class="resumo_fn_content">
        <div class="resumo_fn_left">
          <div class="resumo_fn_page">
            <section id="home">
              <div class="container">
                <div class="roww">
                  <div class="resumo_fn_main_title">
                    <h3 class="subtitle">Introduction</h3>
                    <h3 class="title">UI/Front-End Designer</h3>
                    <p class="desc">I design and develop services for customers of all sizes, specializing in creating
                      stylish, modern websites, web services and online stores.</p><img src="img/signature.png"
                      alt="image" />
                  </div>
                </div>
              </div>
            </section>
            <section id="about">
              <div class="container">
                <div class="roww">
                  <div class="resumo_fn_main_title">
                    <h3 class="subtitle">About Me</h3>
                    <h3 class="title">Biography</h3>
                    <p class="desc">I&#x27;m a Freelancer Front-end Developer with over 12 years
                      of experience. I&#x27;m from Erode. I code and create
                      web elements for amazing people around the world. I like
                      work with new people. New people are new experiences.</p>
                  </div>
                  <div class="resumo_fn_about_info">
                    <div class="about_left">
                      <table>
                        <tbody>
                          <tr>
                            <th>Name</th>
                            <th>Suganeshwaran</th>
                          </tr>
                          <tr>
                            <th>Birthday</th>
                            <th>15th May 1999</th>
                          </tr>
                          <tr>
                            <th>Age</th>
                            <th>22 Years</th>
                          </tr>
                          <tr>
                            <th>Address</th>
                            <th>Erode, India</th>
                          </tr>
                          <tr>
                            <th>Phone</th>
                            <th><a href="tel:+918667254875">(+91) 86672 54875</a></th>
                          </tr>
                          <tr>
                            <th>Email</th>
                            <th><a href="mailto:eshwarsugan@gmail.com">eshwarsugan@gmail.com</a></th>
                          </tr>
                          {/* <!-- <tr>
                            <th>Skype</th>
                            <th><a href="skype:brucewilson.90">brucewilson.90</a></th>
                          </tr> --> */}
                        </tbody>
                      </table>
                    </div>
                    <div class="about_right">
                      {/* <div class="resumo_fn_cv_btn"><a href="img/cv.jpg" download=""><span class="icon"><svg
                              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                              version="1.1" x="0px" y="0px" viewBox="0 0 449.306 449.306"
                              style="enable-background:new 0 0 449.306 449.306" xml:space="preserve"
                              class="fn__svg replaced-svg">
                              <path
                                d="M447.739,251.298l-59.037-126.433c-1.731-3.54-5.484-5.625-9.404-5.224h-50.155c-5.771,0-10.449,4.678-10.449,10.449 c0,5.771,4.678,10.449,10.449,10.449h43.363l48.588,104.49h-59.559c-27.004-0.133-51.563,15.625-62.694,40.229 c-8.062,16.923-25.141,27.698-43.886,27.69h-60.604c-18.745,0.008-35.823-10.767-43.886-27.69 c-11.131-24.604-35.69-40.362-62.694-40.229H29.257l57.469-104.49h33.437c5.771,0,10.449-4.678,10.449-10.449 c0-5.771-4.678-10.449-10.449-10.449H80.457c-3.776-0.358-7.425,1.467-9.404,4.702L2.09,250.776 c-1.209,1.072-1.958,2.569-2.09,4.18v130.09c0.832,29.282,24.524,52.744,53.812,53.29h341.682 c29.289-0.546,52.98-24.008,53.812-53.29v-130.09C449.107,253.622,448.567,252.362,447.739,251.298z M428.408,385.045 c-0.812,17.743-15.16,31.864-32.914,32.392H53.812c-17.754-0.528-32.102-14.648-32.914-32.392V265.927h66.873 c18.745-0.008,35.823,10.767,43.886,27.69c11.131,24.604,35.69,40.362,62.694,40.229h60.604 c27.004,0.133,51.563-15.625,62.694-40.229c8.062-16.923,25.141-27.698,43.886-27.69h66.873V385.045z">
                              </path>
                            </svg><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                              version="1.1" x="0px" y="0px" viewBox="0 0 449.306 449.306"
                              style="enable-background:new 0 0 449.306 449.306" xml:space="preserve"
                              class="fn__svg arrow replaced-svg">
                              <path
                                d="M217.339,252.865c3.706,4.04,9.986,4.31,14.025,0.603c0.21-0.192,0.411-0.394,0.603-0.603l71.053-71.576 c3.462-4.617,2.527-11.166-2.09-14.629c-3.715-2.786-8.824-2.786-12.539,0l-53.29,53.29V21.42 c0-5.771-4.678-10.449-10.449-10.449s-10.449,4.678-10.449,10.449v198.531l-53.29-53.29c-4.617-3.462-11.166-2.527-14.629,2.09 c-2.786,3.715-2.786,8.824,0,12.539L217.339,252.865z">
                              </path>
                            </svg></span><span>Download CV</span></a></div> */}
                    </div>
                  </div>
                  <div class="resumo_fn_tabs">
                    <div class="tab_header">
                      <ul>
                        <li class="active"><a href="#">Experience</a></li>
                        <li class=""><a href="#">Education</a></li>
                        <li class=""><a href="#">Skills</a></li>
                      </ul>
                    </div>
                    <div class="tab_content">
                      <div id="tab1" class="tab_item active">
                        <div class="resumo_fn_boxed_list">
                          <ul>
                            <li>
                              <div class="item">
                                <div class="item_top">
                                  <h5>Frenify LLC</h5><span>( 2018 — Today )</span>
                                </div>
                                <h3>Sr. Front-end Engineer</h3>
                                <p>Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  {/* <!-- --> */}
                                </p>
                              </div>
                            </li>
                            <li>
                              <div class="item">
                                <div class="item_top">
                                  <h5>Google LLC</h5><span>( 2016 — 2018 )</span>
                                </div>
                                <h3>Front-end Developer</h3>
                                <p>Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  {/* <!-- --> */}
                                </p>
                              </div>
                            </li>
                            <li>
                              <div class="item">
                                <div class="item_top">
                                  <h5>Twitter LLC</h5><span>( 2016 — 2011 )</span>
                                </div>
                                <h3>Graphic Designer</h3>
                                <p>Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  {/* <!-- --> */}
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div id="tab2" class="tab_item ">
                        <div class="resumo_fn_boxed_list">
                          <ul>
                            <li>
                              <div class="item">
                                <div class="item_top">
                                  <h5>Frenify University</h5><span>( 2014 — 2017 )</span>
                                </div>
                                <h3>Computer Science</h3>
                                <p>Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  {/* <!-- --> */}
                                </p>
                              </div>
                            </li>
                            <li>
                              <div class="item">
                                <div class="item_top">
                                  <h5>Edu University</h5><span>( 2011 — 2014 )</span>
                                </div>
                                <h3>Master Degree</h3>
                                <p>Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  {/* <!-- --> */}
                                </p>
                              </div>
                            </li>
                            <li>
                              <div class="item">
                                <div class="item_top">
                                  <h5>Clolumbia College</h5><span>( 2007 — 2011 )</span>
                                </div>
                                <h3>Bachelor Degree</h3>
                                <p>Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  {/* <!-- --> */}
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div id="tab3" class="tab_item ">
                        <div class="resumo_fn_progress_bar">
                          <div class="progress_item open" data-value="92">
                            <div class="item_in">
                              <h3 class="progress_title">React</h3><span class="progress_percent"
                                style={{right:"8%"}}>80%</span>
                              <div class="bg_wrap">
                                <div class="progress_bg" style={{width:"92%"}}></div>
                              </div>
                            </div>
                          </div>
                          <div class="progress_item open" data-value="95">
                            <div class="item_in">
                              <h3 class="progress_title">HTML5 &amp; CSS3</h3><span class="progress_percent"
                                style={{right:"5%"}}>95%</span>
                              <div class="bg_wrap">
                                <div class="progress_bg" style={{width:"95%"}}></div>
                              </div>
                            </div>
                          </div>
                          <div class="progress_item open" data-value="80">
                            <div class="item_in">
                              <h3 class="progress_title">WordPress</h3><span class="progress_percent"
                                style={{right:"20%"}}>80%</span>
                              <div class="bg_wrap">
                                <div class="progress_bg" style={{width:"80%"}}></div>
                              </div>
                            </div>
                          </div>
                          <div class="progress_item open" data-value="85">
                            <div class="item_in">
                              <h3 class="progress_title">Adobe Illustrator</h3><span class="progress_percent"
                                style={{right:"15%"}}>85%</span>
                              <div class="bg_wrap">
                                <div class="progress_bg" style={{width:"85%"}}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="resumo_fn_desc">
                          <p>A freelance creative designer with a love for minimal design, clean typography and
                            well-written code, located in San Francisco. Provide high quality and cost effective
                            offshore web and software development services. Wide range of web and software development
                            services across the world.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="portfolio">
              <div class="container">
                <div class="roww">
                  <div class="resumo_fn_main_title">
                    <div class="my__nav"><a href="#" class="prev"><span></span></a><a href="#"
                        class="next"><span></span></a></div>
                    <h3 class="subtitle">Portfolio</h3>
                    <h3 class="title">Featured Projects</h3>
                  </div>
                </div>
              </div>
              <div class="container noright">
                <div class="roww">
                  <div class="swiper owl-carousel modal_items" data-from="portfolio">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide item modal_item swiper-slide-duplicate" data-swiper-slide-index="4"
                        data-index="5">
                        <div class="img_holder"><img src="img/thumb/square.jpg" alt="image" />
                          <div class="abs_img" data-bg-img="img/portfolio/5.jpg" style={{backgroundImage:"url(img/right1.jpg)"}}></div>
                        </div>
                        <div class="title_holder">
                          <p>mobile, design</p>
                          <h3><a href="#">Ice Cream</a></h3>
                        </div>
                        <div class="fn__hidden">
                          <p class="fn__cat">mobile, design</p>
                          <h3 class="fn__title">Ice Cream</h3>
                          <div class="img_holder"><img src="img/thumb/square.jpg" alt="image" />
                            <div class="abs_img" data-bg-img="img/portfolio/5.jpg" style={{backgroundImage:"url(img/right1.jpg)"}}></div>
                          </div>
                          <p class="fn__desc">Sed ornare tellus a odio bibendum, at tristique sapien malesuada. Proin
                            sagittis maximus accumsan. Class aptent taciti sociosqu ad litora torquent per conubia
                            nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Quisque gravida quam sit amet elit varius tempor. Pellentesque purus eros, blandit eu mollis
                            vel, commodo eget orci. Proin vel hendrerit ex. Vivamus ut ex at nunc consectetur efficitur
                            ut quis est. Proin posuere orci eget vulputate fringilla. Curabitur placerat massa eget
                            efficitur cursus. Sed sollicitudin rhoncus blandit. Nam accumsan vestibulum enim. Sed rutrum
                            eu leo pellentesque lobortis. Integer ornare fringilla arcu, eu mattis risus convallis in.
                          </p>
                          <p class="fn__desc">Quisque dui metus, eleifend at enim ac, imperdiet sagittis dolor.
                            Vestibulum ipsum quam, feugiat non velit sit amet, pulvinar varius nisl. Mauris tristique,
                            ipsum sit amet lacinia congue, mauris magna tempus nibh, in mollis eros enim a tortor. Morbi
                            enim arcu, tristique vitae mi nec, hendrerit pharetra metus. Phasellus id feugiat purus. In
                            vel elit eu lacus ultrices feugiat. Etiam at aliquet mi. Nunc sit amet libero sit amet
                            lectus pellentesque sagittis. Curabitur blandit ante quis erat dapibus viverra. Maecenas
                            consequat pulvinar pulvinar. Donec in aliquam arcu. Donec eu laoreet dolor. Ut nisi lectus,
                            pulvinar ac mattis quis, pretium ac nulla. Morbi sed ligula ultrices, ornare mauris id,
                            auctor arcu. Sed pellentesque ex sed erat faucibus, ultrices vehicula ex dapibus. Aenean
                            venenatis metus eros, vel faucibus lorem porttitor eu.</p>
                        </div>
                      </div>
                      <div class="swiper-slide item modal_item" data-swiper-slide-index="0" data-index="1">
                        <div class="img_holder"><img src="img/thumb/square.jpg" alt="image" />
                          <div class="abs_img" data-bg-img="img/portfolio/1.jpg" style={{backgroundImage:"url(img/right1.jpg)"}}></div>
                        </div>
                        <div class="title_holder">
                          <p>illustration, design</p>
                          <h3><a href="#">Sweet Cherry</a></h3>
                        </div>
                        <div class="fn__hidden">
                          <p class="fn__cat">illustration, design</p>
                          <h3 class="fn__title">Sweet Cherry</h3>
                          <div class="img_holder"><img src="img/thumb/square.jpg" alt="image" />
                            <div class="abs_img" data-bg-img="img/portfolio/1.jpg" style={{backgroundImage:"url(img/right1.jpg)"}}></div>
                          </div>
                          <p class="fn__desc">Sed ornare tellus a odio bibendum, at tristique sapien malesuada. Proin
                            sagittis maximus accumsan. Class aptent taciti sociosqu ad litora torquent per conubia
                            nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Quisque gravida quam sit amet elit varius tempor. Pellentesque purus eros, blandit eu mollis
                            vel, commodo eget orci. Proin vel hendrerit ex. Vivamus ut ex at nunc consectetur efficitur
                            ut quis est. Proin posuere orci eget vulputate fringilla. Curabitur placerat massa eget
                            efficitur cursus. Sed sollicitudin rhoncus blandit. Nam accumsan vestibulum enim. Sed rutrum
                            eu leo pellentesque lobortis. Integer ornare fringilla arcu, eu mattis risus convallis in.
                          </p>
                        </div>
                      </div>
                      <div class="swiper-slide item modal_item" data-swiper-slide-index="1" data-index="3">
                        <div class="img_holder"><img src="img/thumb/square.jpg" alt="image" />
                          <div class="abs_img" data-bg-img="img/portfolio/2.jpg" style={{backgroundImage:"url(img/right1.jpg)"}}></div>
                        </div>
                        <div class="title_holder">
                          <p>web, mobile, online</p>
                          <h3><a href="#">Delicious Fruit</a></h3>
                        </div>
                        <div class="fn__hidden">
                          <p class="fn__cat">web, mobile, online</p>
                          <h3 class="fn__title">Delicious Fruit</h3>
                          <div class="img_holder"><img src="img/thumb/square.jpg" alt="image" />
                            <div class="abs_img" data-bg-img="img/portfolio/2.jpg" style={{backgroundImage:"url(img/right1.jpg)"}}></div>
                          </div>
                          <p class="fn__desc">Sed ornare tellus a odio bibendum, at tristique sapien malesuada. Proin
                            sagittis maximus accumsan. Class aptent taciti sociosqu ad litora torquent per conubia
                            nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Quisque gravida quam sit amet elit varius tempor. Pellentesque purus eros, blandit eu mollis
                            vel, commodo eget orci. Proin vel hendrerit ex. Vivamus ut ex at nunc consectetur efficitur
                            ut quis est. Proin posuere orci eget vulputate fringilla. Curabitur placerat massa eget
                            efficitur cursus. Sed sollicitudin rhoncus blandit. Nam accumsan vestibulum enim. Sed rutrum
                            eu leo pellentesque lobortis. Integer ornare fringilla arcu, eu mattis risus convallis in.
                          </p>
                          <p class="fn__desc">Quisque dui metus, eleifend at enim ac, imperdiet sagittis dolor.
                            Vestibulum ipsum quam, feugiat non velit sit amet, pulvinar varius nisl. Mauris tristique,
                            ipsum sit amet lacinia congue, mauris magna tempus nibh, in mollis eros enim a tortor. Morbi
                            enim arcu, tristique vitae mi nec, hendrerit pharetra metus. Phasellus id feugiat purus. In
                            vel elit eu lacus ultrices feugiat. Etiam at aliquet mi. Nunc sit amet libero sit amet
                            lectus pellentesque sagittis. Curabitur blandit ante quis erat dapibus viverra. Maecenas
                            consequat pulvinar pulvinar. Donec in aliquam arcu. Donec eu laoreet dolor. Ut nisi lectus,
                            pulvinar ac mattis quis, pretium ac nulla. Morbi sed ligula ultrices, ornare mauris id,
                            auctor arcu. Sed pellentesque ex sed erat faucibus, ultrices vehicula ex dapibus. Aenean
                            venenatis metus eros, vel faucibus lorem porttitor eu.</p>
                        </div>
                      </div>
                      <div class="swiper-slide item modal_item" data-swiper-slide-index="2" data-index="2">
                        <div class="img_holder"><img src="img/thumb/square.jpg" alt="image" />
                          <div class="abs_img" data-bg-img="img/portfolio/3.jpg" style={{backgroundImage:"url(img/right1.jpg)"}}></div>
                        </div>
                        <div class="title_holder">
                          <p>design, vector</p>
                          <h3><a href="#">Blue Lemon</a></h3>
                        </div>
                        <div class="fn__hidden">
                          <p class="fn__cat">design, vector</p>
                          <h3 class="fn__title">Blue Lemon</h3>
                          <div class="img_holder"><img src="img/thumb/square.jpg" alt="image" />
                            <div class="abs_img" data-bg-img="img/portfolio/3.jpg" style={{backgroundImage:"url(img/right1.jpg)"}}></div>
                          </div>
                          <p class="fn__desc">Sed ornare tellus a odio bibendum, at tristique sapien malesuada. Proin
                            sagittis maximus accumsan. Class aptent taciti sociosqu ad litora torquent per conubia
                            nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Quisque gravida quam sit amet elit varius tempor. Pellentesque purus eros, blandit eu mollis
                            vel, commodo eget orci. Proin vel hendrerit ex. Vivamus ut ex at nunc consectetur efficitur
                            ut quis est. Proin posuere orci eget vulputate fringilla. Curabitur placerat massa eget
                            efficitur cursus. Sed sollicitudin rhoncus blandit. Nam accumsan vestibulum enim. Sed rutrum
                            eu leo pellentesque lobortis. Integer ornare fringilla arcu, eu mattis risus convallis in.
                          </p>
                          <p class="fn__desc">Quisque dui metus, eleifend at enim ac, imperdiet sagittis dolor.
                            Vestibulum ipsum quam, feugiat non velit sit amet, pulvinar varius nisl. Mauris tristique,
                            ipsum sit amet lacinia congue, mauris magna tempus nibh, in mollis eros enim a tortor. Morbi
                            enim arcu, tristique vitae mi nec, hendrerit pharetra metus. Phasellus id feugiat purus. In
                            vel elit eu lacus ultrices feugiat. Etiam at aliquet mi. Nunc sit amet libero sit amet
                            lectus pellentesque sagittis. Curabitur blandit ante quis erat dapibus viverra. Maecenas
                            consequat pulvinar pulvinar. Donec in aliquam arcu. Donec eu laoreet dolor. Ut nisi lectus,
                            pulvinar ac mattis quis, pretium ac nulla. Morbi sed ligula ultrices, ornare mauris id,
                            auctor arcu. Sed pellentesque ex sed erat faucibus, ultrices vehicula ex dapibus. Aenean
                            venenatis metus eros, vel faucibus lorem porttitor eu.</p>
                        </div>
                      </div>
                      <div class="swiper-slide item modal_item" data-swiper-slide-index="3" data-index="4">
                        <div class="img_holder"><img src="img/thumb/square.jpg" alt="image" />
                          <div class="abs_img" data-bg-img="img/portfolio/4.jpg" style={{backgroundImage:"url(img/right1.jpg)"}}></div>
                        </div>
                        <div class="title_holder">
                          <p>mobile, design</p>
                          <h3><a href="#">Yellow Phone</a></h3>
                        </div>
                        <div class="fn__hidden">
                          <p class="fn__cat">mobile, design</p>
                          <h3 class="fn__title">Yellow Phone</h3>
                          <div class="img_holder"><img src="img/thumb/square.jpg" alt="image" />
                            <div class="abs_img" data-bg-img="img/portfolio/4.jpg" style={{backgroundImage:"url(img/right1.jpg)"}}></div>
                          </div>
                          <p class="fn__desc">Sed ornare tellus a odio bibendum, at tristique sapien malesuada. Proin
                            sagittis maximus accumsan. Class aptent taciti sociosqu ad litora torquent per conubia
                            nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Quisque gravida quam sit amet elit varius tempor. Pellentesque purus eros, blandit eu mollis
                            vel, commodo eget orci. Proin vel hendrerit ex. Vivamus ut ex at nunc consectetur efficitur
                            ut quis est. Proin posuere orci eget vulputate fringilla. Curabitur placerat massa eget
                            efficitur cursus. Sed sollicitudin rhoncus blandit. Nam accumsan vestibulum enim. Sed rutrum
                            eu leo pellentesque lobortis. Integer ornare fringilla arcu, eu mattis risus convallis in.
                          </p>
                          <p class="fn__desc">Quisque dui metus, eleifend at enim ac, imperdiet sagittis dolor.
                            Vestibulum ipsum quam, feugiat non velit sit amet, pulvinar varius nisl. Mauris tristique,
                            ipsum sit amet lacinia congue, mauris magna tempus nibh, in mollis eros enim a tortor. Morbi
                            enim arcu, tristique vitae mi nec, hendrerit pharetra metus. Phasellus id feugiat purus. In
                            vel elit eu lacus ultrices feugiat. Etiam at aliquet mi. Nunc sit amet libero sit amet
                            lectus pellentesque sagittis. Curabitur blandit ante quis erat dapibus viverra. Maecenas
                            consequat pulvinar pulvinar. Donec in aliquam arcu. Donec eu laoreet dolor. Ut nisi lectus,
                            pulvinar ac mattis quis, pretium ac nulla. Morbi sed ligula ultrices, ornare mauris id,
                            auctor arcu. Sed pellentesque ex sed erat faucibus, ultrices vehicula ex dapibus. Aenean
                            venenatis metus eros, vel faucibus lorem porttitor eu.</p>
                        </div>
                      </div>
                      <div class="swiper-slide item modal_item" data-swiper-slide-index="4" data-index="5">
                        <div class="img_holder"><img src="img/thumb/square.jpg" alt="image" />
                          <div class="abs_img" data-bg-img="img/portfolio/5.jpg" style={{backgroundImage:"url(img/right1.jpg)"}}></div>
                        </div>
                        <div class="title_holder">
                          <p>mobile, design</p>
                          <h3><a href="#">Ice Cream</a></h3>
                        </div>
                        <div class="fn__hidden">
                          <p class="fn__cat">mobile, design</p>
                          <h3 class="fn__title">Ice Cream</h3>
                          <div class="img_holder"><img src="img/thumb/square.jpg" alt="image" />
                            <div class="abs_img" data-bg-img="img/portfolio/5.jpg" style={{backgroundImage:"url(img/right1.jpg)"}}></div>
                          </div>
                          <p class="fn__desc">Sed ornare tellus a odio bibendum, at tristique sapien malesuada. Proin
                            sagittis maximus accumsan. Class aptent taciti sociosqu ad litora torquent per conubia
                            nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Quisque gravida quam sit amet elit varius tempor. Pellentesque purus eros, blandit eu mollis
                            vel, commodo eget orci. Proin vel hendrerit ex. Vivamus ut ex at nunc consectetur efficitur
                            ut quis est. Proin posuere orci eget vulputate fringilla. Curabitur placerat massa eget
                            efficitur cursus. Sed sollicitudin rhoncus blandit. Nam accumsan vestibulum enim. Sed rutrum
                            eu leo pellentesque lobortis. Integer ornare fringilla arcu, eu mattis risus convallis in.
                          </p>
                          <p class="fn__desc">Quisque dui metus, eleifend at enim ac, imperdiet sagittis dolor.
                            Vestibulum ipsum quam, feugiat non velit sit amet, pulvinar varius nisl. Mauris tristique,
                            ipsum sit amet lacinia congue, mauris magna tempus nibh, in mollis eros enim a tortor. Morbi
                            enim arcu, tristique vitae mi nec, hendrerit pharetra metus. Phasellus id feugiat purus. In
                            vel elit eu lacus ultrices feugiat. Etiam at aliquet mi. Nunc sit amet libero sit amet
                            lectus pellentesque sagittis. Curabitur blandit ante quis erat dapibus viverra. Maecenas
                            consequat pulvinar pulvinar. Donec in aliquam arcu. Donec eu laoreet dolor. Ut nisi lectus,
                            pulvinar ac mattis quis, pretium ac nulla. Morbi sed ligula ultrices, ornare mauris id,
                            auctor arcu. Sed pellentesque ex sed erat faucibus, ultrices vehicula ex dapibus. Aenean
                            venenatis metus eros, vel faucibus lorem porttitor eu.</p>
                        </div>
                      </div>
                      <div class="swiper-slide item modal_item swiper-slide-duplicate" data-swiper-slide-index="0"
                        data-index="1">
                        <div class="img_holder"><img src="img/thumb/square.jpg" alt="image" />
                          <div class="abs_img" data-bg-img="img/portfolio/1.jpg" style={{backgroundImage:"url(img/right1.jpg)"}}></div>
                        </div>
                        <div class="title_holder">
                          <p>illustration, design</p>
                          <h3><a href="#">Sweet Cherry</a></h3>
                        </div>
                        <div class="fn__hidden">
                          <p class="fn__cat">illustration, design</p>
                          <h3 class="fn__title">Sweet Cherry</h3>
                          <div class="img_holder"><img src="img/thumb/square.jpg" alt="image" />
                            <div class="abs_img" data-bg-img="img/portfolio/1.jpg" style={{backgroundImage:"url(img/right1.jpg)"}}></div>
                          </div>
                          <p class="fn__desc">Sed ornare tellus a odio bibendum, at tristique sapien malesuada. Proin
                            sagittis maximus accumsan. Class aptent taciti sociosqu ad litora torquent per conubia
                            nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Quisque gravida quam sit amet elit varius tempor. Pellentesque purus eros, blandit eu mollis
                            vel, commodo eget orci. Proin vel hendrerit ex. Vivamus ut ex at nunc consectetur efficitur
                            ut quis est. Proin posuere orci eget vulputate fringilla. Curabitur placerat massa eget
                            efficitur cursus. Sed sollicitudin rhoncus blandit. Nam accumsan vestibulum enim. Sed rutrum
                            eu leo pellentesque lobortis. Integer ornare fringilla arcu, eu mattis risus convallis in.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="services">
              <div class="container">
                <div class="roww">
                  <div class="resumo_fn_main_title">
                    <h3 class="subtitle">Services</h3>
                    <h3 class="title">What I Do</h3>
                    <p class="desc">I help ambitious businesses like yours generate more profits by building awareness,
                      driving web traffic, connecting with customers and growing overall sales.</p>
                  </div>
                  <div class="resumo_fn_service_list">
                    <ul>
                      <li>
                        <div class="item">
                          <div class="item_left">
                            <h3>Brand Consultant</h3>
                            <p>I build brands through cultural insights &amp; strategic vision. Custom crafted business
                              solutions.</p>
                          </div>
                          <div class="item_right">
                            <p>Starts from</p>
                            <h3>$599</h3>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="item">
                          <div class="item_left">
                            <h3>Global Marketing</h3>
                            <p>Custom marketing solutions. Get your business on the next level. We provide worldwide
                              marketing.</p>
                          </div>
                          <div class="item_right">
                            <p>Starts from</p>
                            <h3>$399</h3>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="item">
                          <div class="item_left">
                            <h3>UI/UX Solutions</h3>
                            <p>Design direction for business. Get your business on the next level. We help to create
                              great experiences.</p>
                          </div>
                          <div class="item_right">
                            <p>Starts from</p>
                            <h3>$499</h3>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <section id="customers">
              <div class="container">
                <div class="roww">
                  <div class="resumo_fn_main_title">
                    <h3 class="subtitle">Customers</h3>
                    <h3 class="title">Happy People</h3>
                  </div>
                  <div class="resumo_fn_partners">
                    <ul>
                      <li><a href="https://envato.com/" rel="noreferrer" target="_blank"><img src="img/partners/1.png"
                            alt="image" /></a></li>
                      <li><a href="https://frenify.com/" rel="noreferrer" target="_blank"><img src="img/partners/2.png"
                            alt="image" /></a></li>
                      <li><a href="https://themeforest.net/item/rewall-pesonal-portfolio-react-nextjs-template/34826425"
                          target="_blank" rel="noreferrer"><img src="img/partners/3.png" alt="image" /></a></li>
                      <li><a href="https://themeforest.net/item/artemiz-blog-podcast-wordpress-theme/28455063"
                          target="_blank" rel="noreferrer"><img src="img/partners/4.png" alt="image" /></a></li>
                      <li><a
                          href="https://themeforest.net/item/wetland-multi-purpose-react-next-js-template-for-startup/33851796"
                          rel="noreferrer" target="_blank"><img src="img/partners/5.png" alt="image" /></a></li>
                      <li><a
                          href="https://themeforest.net/item/edunet-react-personal-tutor-lms-dashboard-ui-kit/31635576"
                          rel="noreferrer" target="_blank"><img src="img/partners/6.png" alt="image" /></a></li>
                      <li><a href="https://themeforest.net/item/appz-mobile-app-landing-react-nextjs-template/34385390"
                          rel="noreferrer" target="_blank"><img src="img/partners/7.png" alt="image" /></a></li>
                      <li><a href="https://themeforest.net/item/rewall-pesonal-portfolio-react-nextjs-template/34826425"
                          rel="noreferrer" target="_blank"><img src="img/partners/3.png" alt="image" /></a></li>
                    </ul>
                  </div>
                  <div class="resumo_fn_testimonials">
                    <div class="my__nav"><a href="#" class="prev"><span></span></a><a href="#"
                        class="next"><span></span></a></div>
                    <div class="swiper owl-carousel">
                      <div class="swiper-wrapper">
                        <div class="swiper-slide item swiper-slide-duplicate" data-swiper-slide-index="2">
                          <div class="title_holder">
                            <p class="desc">“ Had a problem with the layout after Installation- found no approach. The
                              support reacted quickly and competently. And solved the problem between Elementor and a
                              WordPress update. Great! ”</p>
                            <h3 class="title">Dana Atkins</h3>
                            <h3 class="subtitle">Customer</h3>
                          </div>
                        </div>
                        <div class="swiper-slide item" data-swiper-slide-index="0">
                          <div class="title_holder">
                            <p class="desc">“ They really nailed it. This is one of the best themes I have seen in a
                              long time. Very nice design with lots of customization available. Many of my clients have
                              chosen this theme for their portfolio sites. ”</p>
                            <h3 class="title">Albert Walker</h3>
                            <h3 class="subtitle">Freelancer &amp; Designer</h3>
                          </div>
                        </div>
                        <div class="swiper-slide item" data-swiper-slide-index="1">
                          <div class="title_holder">
                            <p class="desc">“ This was exactly what I needed for my portfolio,
                              and it looks great. I had a couple issues that
                              support helped troubleshoot both via email and on
                              the comments, which definitely made it worth the
                              price. I&#x27;m very pleased with this purchase. ”</p>
                            <h3 class="title">Anna Barbera</h3>
                            <h3 class="subtitle">Photographer</h3>
                          </div>
                        </div>
                        <div class="swiper-slide item" data-swiper-slide-index="2">
                          <div class="title_holder">
                            <p class="desc">“ Had a problem with the layout after Installation- found no approach. The
                              support reacted quickly and competently. And solved the problem between Elementor and a
                              WordPress update. Great! ”</p>
                            <h3 class="title">Dana Atkins</h3>
                            <h3 class="subtitle">Customer</h3>
                          </div>
                        </div>
                        <div class="swiper-slide item swiper-slide-duplicate" data-swiper-slide-index="0">
                          <div class="title_holder">
                            <p class="desc">“ They really nailed it. This is one of the best themes I have seen in a
                              long time. Very nice design with lots of customization available. Many of my clients have
                              chosen this theme for their portfolio sites. ”</p>
                            <h3 class="title">Albert Walker</h3>
                            <h3 class="subtitle">Freelancer &amp; Designer</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="news">
              <div class="container">
                <div class="roww">
                  <div class="resumo_fn_main_title">
                    <h3 class="subtitle">News &amp; Tips</h3>
                    <h3 class="title">Latest Articles</h3>
                  </div>
                  <div class="resumo_fn_blog_list">
                    <ul class="modal_items" data-from="blog" data-count="5">
                      <li>
                        <div class="item modal_item" data-index="1">
                          <div class="img_holder"><img src="img/thumb/square.jpg" alt="image" />
                            <div class="abs_img" data-bg-img="img/blog/1.jpg" style={{backgroundImage: "url(img/right1.jpg)"}}></div>
                          </div>
                          <div class="title_holder">
                            <p>September 22, 2021</p>
                            <h3><a href="#">Five Solid Evidences Attending Design Is Good For Your Career
                                Development.</a></h3>
                          </div>
                          <div class="fn__hidden">
                            <p class="fn__cat">September 22, 2021</p>
                            <h3 class="fn__title">Five Solid Evidences Attending Design Is Good For Your Career
                              Development.</h3>
                            <div class="img_holder"><img src="img/thumb/square.jpg" alt="image" />
                              <div class="abs_img" data-bg-img="img/blog/1.jpg" style={{backgroundImage: "url(img/right1.jpg)"}}></div>
                            </div>
                            <p class="fn__desc">Sed ornare tellus a odio bibendum, at tristique sapien malesuada. Proin
                              sagittis maximus accumsan. Class aptent taciti sociosqu ad litora torquent per conubia
                              nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Quisque gravida quam sit amet elit varius tempor. Pellentesque purus eros, blandit eu
                              mollis vel, commodo eget orci. Proin vel hendrerit ex. Vivamus ut ex at nunc consectetur
                              efficitur ut quis est. Proin posuere orci eget vulputate fringilla. Curabitur placerat
                              massa eget efficitur cursus. Sed sollicitudin rhoncus blandit. Nam accumsan vestibulum
                              enim. Sed rutrum eu leo pellentesque lobortis. Integer ornare fringilla arcu, eu mattis
                              risus convallis in.</p>
                            <p class="fn__desc">Quisque dui metus, eleifend at enim ac, imperdiet sagittis dolor.
                              Vestibulum ipsum quam, feugiat non velit sit amet, pulvinar varius nisl. Mauris tristique,
                              ipsum sit amet lacinia congue, mauris magna tempus nibh, in mollis eros enim a tortor.
                              Morbi enim arcu, tristique vitae mi nec, hendrerit pharetra metus. Phasellus id feugiat
                              purus. In vel elit eu lacus ultrices feugiat. Etiam at aliquet mi. Nunc sit amet libero
                              sit amet lectus pellentesque sagittis. Curabitur blandit ante quis erat dapibus viverra.
                              Maecenas consequat pulvinar pulvinar. Donec in aliquam arcu. Donec eu laoreet dolor. Ut
                              nisi lectus, pulvinar ac mattis quis, pretium ac nulla. Morbi sed ligula ultrices, ornare
                              mauris id, auctor arcu. Sed pellentesque ex sed erat faucibus, ultrices vehicula ex
                              dapibus. Aenean venenatis metus eros, vel faucibus lorem porttitor eu.</p>
                            <p class="fn__desc">Sed porttitor augue erat, vitae convallis odio viverra id. In nec
                              finibus elit. Nullam ac sodales nunc, vel sagittis elit. Ut condimentum ex ipsum, eu
                              ornare odio aliquam eu. Ut iaculis eros quam, eu bibendum tellus convallis quis. Donec
                              sapien risus, consequat ut magna nec, interdum porta nisl. Vivamus pulvinar hendrerit
                              finibus. Nunc molestie lacinia risus, id mattis nunc euismod ac. Nam eu orci felis.
                              Quisque ut elementum quam. Vivamus pulvinar nisi nunc, ut faucibus turpis tincidunt eget.
                              Fusce nec ex quis odio laoreet consequat. Duis faucibus metus id feugiat sodales. Sed eu
                              ligula eget quam ultricies tincidunt. Morbi sodales nunc ultrices justo pellentesque, ac
                              mattis mi sagittis. Morbi ut consectetur neque.</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="item modal_item" data-index="2">
                          <div class="img_holder"><img src="img/thumb/square.jpg" alt="image" />
                            <div class="abs_img" data-bg-img="img/blog/2.jpg" style={{backgroundImage: "url(img/right1.jpg)"}}></div>
                          </div>
                          <div class="title_holder">
                            <p>September 17, 2021</p>
                            <h3><a href="#">Ten Mind-Blowing Reasons Why Design Is Using This Technique For
                                Exposure.</a></h3>
                          </div>
                          <div class="fn__hidden">
                            <p class="fn__cat">September 17, 2021</p>
                            <h3 class="fn__title">Ten Mind-Blowing Reasons Why Design Is Using This Technique For
                              Exposure.</h3>
                            <div class="img_holder"><img src="img/thumb/square.jpg" alt="image" />
                              <div class="abs_img" data-bg-img="img/blog/2.jpg" style={{backgroundImage: "url(img/right1.jpg)"}}></div>
                            </div>
                            <p class="fn__desc">Sed ornare tellus a odio bibendum, at tristique sapien malesuada. Proin
                              sagittis maximus accumsan. Class aptent taciti sociosqu ad litora torquent per conubia
                              nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Quisque gravida quam sit amet elit varius tempor. Pellentesque purus eros, blandit eu
                              mollis vel, commodo eget orci. Proin vel hendrerit ex. Vivamus ut ex at nunc consectetur
                              efficitur ut quis est. Proin posuere orci eget vulputate fringilla. Curabitur placerat
                              massa eget efficitur cursus. Sed sollicitudin rhoncus blandit. Nam accumsan vestibulum
                              enim. Sed rutrum eu leo pellentesque lobortis. Integer ornare fringilla arcu, eu mattis
                              risus convallis in.</p>
                            <p class="fn__desc">Quisque dui metus, eleifend at enim ac, imperdiet sagittis dolor.
                              Vestibulum ipsum quam, feugiat non velit sit amet, pulvinar varius nisl. Mauris tristique,
                              ipsum sit amet lacinia congue, mauris magna tempus nibh, in mollis eros enim a tortor.
                              Morbi enim arcu, tristique vitae mi nec, hendrerit pharetra metus. Phasellus id feugiat
                              purus. In vel elit eu lacus ultrices feugiat. Etiam at aliquet mi. Nunc sit amet libero
                              sit amet lectus pellentesque sagittis. Curabitur blandit ante quis erat dapibus viverra.
                              Maecenas consequat pulvinar pulvinar. Donec in aliquam arcu. Donec eu laoreet dolor. Ut
                              nisi lectus, pulvinar ac mattis quis, pretium ac nulla. Morbi sed ligula ultrices, ornare
                              mauris id, auctor arcu. Sed pellentesque ex sed erat faucibus, ultrices vehicula ex
                              dapibus. Aenean venenatis metus eros, vel faucibus lorem porttitor eu.</p>
                            <p class="fn__desc">Sed porttitor augue erat, vitae convallis odio viverra id. In nec
                              finibus elit. Nullam ac sodales nunc, vel sagittis elit. Ut condimentum ex ipsum, eu
                              ornare odio aliquam eu. Ut iaculis eros quam, eu bibendum tellus convallis quis. Donec
                              sapien risus, consequat ut magna nec, interdum porta nisl. Vivamus pulvinar hendrerit
                              finibus. Nunc molestie lacinia risus, id mattis nunc euismod ac. Nam eu orci felis.
                              Quisque ut elementum quam. Vivamus pulvinar nisi nunc, ut faucibus turpis tincidunt eget.
                              Fusce nec ex quis odio laoreet consequat. Duis faucibus metus id feugiat sodales. Sed eu
                              ligula eget quam ultricies tincidunt. Morbi sodales nunc ultrices justo pellentesque, ac
                              mattis mi sagittis. Morbi ut consectetur neque.</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="item modal_item" data-index="3">
                          <div class="img_holder"><img src="img/thumb/square.jpg" alt="image" />
                            <div class="abs_img" data-bg-img="img/blog/3.jpg" style={{backgroundImage: "url(img/right1.jpg)"}}></div>
                          </div>
                          <div class="title_holder">
                            <p>September 04, 2021</p>
                            <h3><a href="#">I Will Tell You The Truth About Design In The Next 60 Seconds.</a></h3>
                          </div>
                          <div class="fn__hidden">
                            <p class="fn__cat">September 04, 2021</p>
                            <h3 class="fn__title">I Will Tell You The Truth About Design In The Next 60 Seconds.</h3>
                            <div class="img_holder"><img src="img/thumb/square.jpg" alt="image" />
                              <div class="abs_img" data-bg-img="img/blog/3.jpg" style={{backgroundImage: "url(img/right1.jpg)"}}></div>
                            </div>
                            <p class="fn__desc">Sed ornare tellus a odio bibendum, at tristique sapien malesuada. Proin
                              sagittis maximus accumsan. Class aptent taciti sociosqu ad litora torquent per conubia
                              nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Quisque gravida quam sit amet elit varius tempor. Pellentesque purus eros, blandit eu
                              mollis vel, commodo eget orci. Proin vel hendrerit ex. Vivamus ut ex at nunc consectetur
                              efficitur ut quis est. Proin posuere orci eget vulputate fringilla. Curabitur placerat
                              massa eget efficitur cursus. Sed sollicitudin rhoncus blandit. Nam accumsan vestibulum
                              enim. Sed rutrum eu leo pellentesque lobortis. Integer ornare fringilla arcu, eu mattis
                              risus convallis in.</p>
                            <p class="fn__desc">Quisque dui metus, eleifend at enim ac, imperdiet sagittis dolor.
                              Vestibulum ipsum quam, feugiat non velit sit amet, pulvinar varius nisl. Mauris tristique,
                              ipsum sit amet lacinia congue, mauris magna tempus nibh, in mollis eros enim a tortor.
                              Morbi enim arcu, tristique vitae mi nec, hendrerit pharetra metus. Phasellus id feugiat
                              purus. In vel elit eu lacus ultrices feugiat. Etiam at aliquet mi. Nunc sit amet libero
                              sit amet lectus pellentesque sagittis. Curabitur blandit ante quis erat dapibus viverra.
                              Maecenas consequat pulvinar pulvinar. Donec in aliquam arcu. Donec eu laoreet dolor. Ut
                              nisi lectus, pulvinar ac mattis quis, pretium ac nulla. Morbi sed ligula ultrices, ornare
                              mauris id, auctor arcu. Sed pellentesque ex sed erat faucibus, ultrices vehicula ex
                              dapibus. Aenean venenatis metus eros, vel faucibus lorem porttitor eu.</p>
                            <p class="fn__desc">Sed porttitor augue erat, vitae convallis odio viverra id. In nec
                              finibus elit. Nullam ac sodales nunc, vel sagittis elit. Ut condimentum ex ipsum, eu
                              ornare odio aliquam eu. Ut iaculis eros quam, eu bibendum tellus convallis quis. Donec
                              sapien risus, consequat ut magna nec, interdum porta nisl. Vivamus pulvinar hendrerit
                              finibus. Nunc molestie lacinia risus, id mattis nunc euismod ac. Nam eu orci felis.
                              Quisque ut elementum quam. Vivamus pulvinar nisi nunc, ut faucibus turpis tincidunt eget.
                              Fusce nec ex quis odio laoreet consequat. Duis faucibus metus id feugiat sodales. Sed eu
                              ligula eget quam ultricies tincidunt. Morbi sodales nunc ultrices justo pellentesque, ac
                              mattis mi sagittis. Morbi ut consectetur neque.</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="item modal_item" data-index="4">
                          <div class="img_holder"><img src="img/thumb/square.jpg" alt="image" />
                            <div class="abs_img" data-bg-img="img/blog/4.jpg" style={{backgroundImage: "url(img/right1.jpg)"}}></div>
                          </div>
                          <div class="title_holder">
                            <p>August 18, 2021</p>
                            <h3><a href="#">What You Know About Design And What You Don&#x27;t
                                Know About Design.</a></h3>
                          </div>
                          <div class="fn__hidden">
                            <p class="fn__cat">August 18, 2021</p>
                            <h3 class="fn__title"> What You Know About Design And What You Don&#x27;t
                              Know About Design.</h3>
                            <div class="img_holder"><img src="img/thumb/square.jpg" alt="image" />
                              <div class="abs_img" data-bg-img="img/blog/4.jpg" style={{backgroundImage: "url(img/right1.jpg)"}}></div>
                            </div>
                            <p class="fn__desc">Sed ornare tellus a odio bibendum, at tristique sapien malesuada. Proin
                              sagittis maximus accumsan. Class aptent taciti sociosqu ad litora torquent per conubia
                              nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Quisque gravida quam sit amet elit varius tempor. Pellentesque purus eros, blandit eu
                              mollis vel, commodo eget orci. Proin vel hendrerit ex. Vivamus ut ex at nunc consectetur
                              efficitur ut quis est. Proin posuere orci eget vulputate fringilla. Curabitur placerat
                              massa eget efficitur cursus. Sed sollicitudin rhoncus blandit. Nam accumsan vestibulum
                              enim. Sed rutrum eu leo pellentesque lobortis. Integer ornare fringilla arcu, eu mattis
                              risus convallis in.</p>
                            <p class="fn__desc">Quisque dui metus, eleifend at enim ac, imperdiet sagittis dolor.
                              Vestibulum ipsum quam, feugiat non velit sit amet, pulvinar varius nisl. Mauris tristique,
                              ipsum sit amet lacinia congue, mauris magna tempus nibh, in mollis eros enim a tortor.
                              Morbi enim arcu, tristique vitae mi nec, hendrerit pharetra metus. Phasellus id feugiat
                              purus. In vel elit eu lacus ultrices feugiat. Etiam at aliquet mi. Nunc sit amet libero
                              sit amet lectus pellentesque sagittis. Curabitur blandit ante quis erat dapibus viverra.
                              Maecenas consequat pulvinar pulvinar. Donec in aliquam arcu. Donec eu laoreet dolor. Ut
                              nisi lectus, pulvinar ac mattis quis, pretium ac nulla. Morbi sed ligula ultrices, ornare
                              mauris id, auctor arcu. Sed pellentesque ex sed erat faucibus, ultrices vehicula ex
                              dapibus. Aenean venenatis metus eros, vel faucibus lorem porttitor eu.</p>
                            <p class="fn__desc">Sed porttitor augue erat, vitae convallis odio viverra id. In nec
                              finibus elit. Nullam ac sodales nunc, vel sagittis elit. Ut condimentum ex ipsum, eu
                              ornare odio aliquam eu. Ut iaculis eros quam, eu bibendum tellus convallis quis. Donec
                              sapien risus, consequat ut magna nec, interdum porta nisl. Vivamus pulvinar hendrerit
                              finibus. Nunc molestie lacinia risus, id mattis nunc euismod ac. Nam eu orci felis.
                              Quisque ut elementum quam. Vivamus pulvinar nisi nunc, ut faucibus turpis tincidunt eget.
                              Fusce nec ex quis odio laoreet consequat. Duis faucibus metus id feugiat sodales. Sed eu
                              ligula eget quam ultricies tincidunt. Morbi sodales nunc ultrices justo pellentesque, ac
                              mattis mi sagittis. Morbi ut consectetur neque.</p>
                          </div>
                        </div>
                      </li>
                      <li class="be_animated">
                        <div class="item modal_item" data-index="5">
                          <div class="img_holder"><img src="img/thumb/square.jpg" alt="image" />
                            <div class="abs_img" data-bg-img="img/blog/5.jpg" style={{backgroundImage: "url(img/right1.jpg)"}}></div>
                          </div>
                          <div class="title_holder">
                            <p>August 15, 2021</p>
                            <h3><a href="#">Forgive Yourself for Not Being Perfect. Then Do It Again Tomorrow.</a></h3>
                          </div>
                          <div class="fn__hidden">
                            <p class="fn__cat">August 15, 2021</p>
                            <h3 class="fn__title">Forgive Yourself for Not Being Perfect. Then Do It Again Tomorrow.
                            </h3>
                            <div class="img_holder"><img src="img/thumb/square.jpg" alt="image" />
                              <div class="abs_img" data-bg-img="img/blog/5.jpg" style={{backgroundImage: "url(img/right1.jpg)"}}></div>
                            </div>
                            <p class="fn__desc">Sed ornare tellus a odio bibendum, at tristique sapien malesuada. Proin
                              sagittis maximus accumsan. Class aptent taciti sociosqu ad litora torquent per conubia
                              nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Quisque gravida quam sit amet elit varius tempor. Pellentesque purus eros, blandit eu
                              mollis vel, commodo eget orci. Proin vel hendrerit ex. Vivamus ut ex at nunc consectetur
                              efficitur ut quis est. Proin posuere orci eget vulputate fringilla. Curabitur placerat
                              massa eget efficitur cursus. Sed sollicitudin rhoncus blandit. Nam accumsan vestibulum
                              enim. Sed rutrum eu leo pellentesque lobortis. Integer ornare fringilla arcu, eu mattis
                              risus convallis in.</p>
                            <p class="fn__desc">Quisque dui metus, eleifend at enim ac, imperdiet sagittis dolor.
                              Vestibulum ipsum quam, feugiat non velit sit amet, pulvinar varius nisl. Mauris tristique,
                              ipsum sit amet lacinia congue, mauris magna tempus nibh, in mollis eros enim a tortor.
                              Morbi enim arcu, tristique vitae mi nec, hendrerit pharetra metus. Phasellus id feugiat
                              purus. In vel elit eu lacus ultrices feugiat. Etiam at aliquet mi. Nunc sit amet libero
                              sit amet lectus pellentesque sagittis. Curabitur blandit ante quis erat dapibus viverra.
                              Maecenas consequat pulvinar pulvinar. Donec in aliquam arcu. Donec eu laoreet dolor. Ut
                              nisi lectus, pulvinar ac mattis quis, pretium ac nulla. Morbi sed ligula ultrices, ornare
                              mauris id, auctor arcu. Sed pellentesque ex sed erat faucibus, ultrices vehicula ex
                              dapibus. Aenean venenatis metus eros, vel faucibus lorem porttitor eu.</p>
                            <p class="fn__desc">Sed porttitor augue erat, vitae convallis odio viverra id. In nec
                              finibus elit. Nullam ac sodales nunc, vel sagittis elit. Ut condimentum ex ipsum, eu
                              ornare odio aliquam eu. Ut iaculis eros quam, eu bibendum tellus convallis quis. Donec
                              sapien risus, consequat ut magna nec, interdum porta nisl. Vivamus pulvinar hendrerit
                              finibus. Nunc molestie lacinia risus, id mattis nunc euismod ac. Nam eu orci felis.
                              Quisque ut elementum quam. Vivamus pulvinar nisi nunc, ut faucibus turpis tincidunt eget.
                              Fusce nec ex quis odio laoreet consequat. Duis faucibus metus id feugiat sodales. Sed eu
                              ligula eget quam ultricies tincidunt. Morbi sodales nunc ultrices justo pellentesque, ac
                              mattis mi sagittis. Morbi ut consectetur neque.</p>
                          </div>
                        </div>
                      </li>
                      <li class="be_animated">
                        <div class="item modal_item" data-index="6">
                          <div class="img_holder"><img src="img/thumb/square.jpg" alt="image" />
                            <div class="abs_img" data-bg-img="img/blog/6.jpg" style={{backgroundImage: "url(img/right1.jpg)"}}></div>
                          </div>
                          <div class="title_holder">
                            <p>August 01, 2021</p>
                            <h3><a href="#">Why Decorating Your Home Is Good for Your Mental Health</a></h3>
                          </div>
                          <div class="fn__hidden">
                            <p class="fn__cat">August 01, 2021</p>
                            <h3 class="fn__title">Why Decorating Your Home Is Good for Your Mental Health</h3>
                            <div class="img_holder"><img src="img/thumb/square.jpg" alt="image" />
                              <div class="abs_img" data-bg-img="img/blog/6.jpg" style={{backgroundImage: "url(img/right1.jpg)"}}></div>
                            </div>
                            <p class="fn__desc">Sed ornare tellus a odio bibendum, at tristique sapien malesuada. Proin
                              sagittis maximus accumsan. Class aptent taciti sociosqu ad litora torquent per conubia
                              nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Quisque gravida quam sit amet elit varius tempor. Pellentesque purus eros, blandit eu
                              mollis vel, commodo eget orci. Proin vel hendrerit ex. Vivamus ut ex at nunc consectetur
                              efficitur ut quis est. Proin posuere orci eget vulputate fringilla. Curabitur placerat
                              massa eget efficitur cursus. Sed sollicitudin rhoncus blandit. Nam accumsan vestibulum
                              enim. Sed rutrum eu leo pellentesque lobortis. Integer ornare fringilla arcu, eu mattis
                              risus convallis in.</p>
                            <p class="fn__desc">Quisque dui metus, eleifend at enim ac, imperdiet sagittis dolor.
                              Vestibulum ipsum quam, feugiat non velit sit amet, pulvinar varius nisl. Mauris tristique,
                              ipsum sit amet lacinia congue, mauris magna tempus nibh, in mollis eros enim a tortor.
                              Morbi enim arcu, tristique vitae mi nec, hendrerit pharetra metus. Phasellus id feugiat
                              purus. In vel elit eu lacus ultrices feugiat. Etiam at aliquet mi. Nunc sit amet libero
                              sit amet lectus pellentesque sagittis. Curabitur blandit ante quis erat dapibus viverra.
                              Maecenas consequat pulvinar pulvinar. Donec in aliquam arcu. Donec eu laoreet dolor. Ut
                              nisi lectus, pulvinar ac mattis quis, pretium ac nulla. Morbi sed ligula ultrices, ornare
                              mauris id, auctor arcu. Sed pellentesque ex sed erat faucibus, ultrices vehicula ex
                              dapibus. Aenean venenatis metus eros, vel faucibus lorem porttitor eu.</p>
                            <p class="fn__desc">Sed porttitor augue erat, vitae convallis odio viverra id. In nec
                              finibus elit. Nullam ac sodales nunc, vel sagittis elit. Ut condimentum ex ipsum, eu
                              ornare odio aliquam eu. Ut iaculis eros quam, eu bibendum tellus convallis quis. Donec
                              sapien risus, consequat ut magna nec, interdum porta nisl. Vivamus pulvinar hendrerit
                              finibus. Nunc molestie lacinia risus, id mattis nunc euismod ac. Nam eu orci felis.
                              Quisque ut elementum quam. Vivamus pulvinar nisi nunc, ut faucibus turpis tincidunt eget.
                              Fusce nec ex quis odio laoreet consequat. Duis faucibus metus id feugiat sodales. Sed eu
                              ligula eget quam ultricies tincidunt. Morbi sodales nunc ultrices justo pellentesque, ac
                              mattis mi sagittis. Morbi ut consectetur neque.</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div class="clearfix"></div>
                    <div class="load_more"><a href="#" data-done="Done" class="" data-no="No more articles found"><span
                          class="text">Load More Articles</span><span
                          class="fn__pulse"><span></span><span></span><span></span></span></a></div>
                  </div>
                </div>
              </div>
            </section>
            <section id="contact">
              <div class="container">
                <div class="roww resumo_fn_contact">
                  <div class="resumo_fn_main_title">
                    <h3 class="subtitle">Contact</h3>
                    <h3 class="title">Get In Touch</h3>
                    <p class="desc">If you have any suggestion, project or even you want to say “hello”, please fill out
                      the form below and I will reply you shortly.</p>
                  </div>
                  <form class="contact_form">
                    <div class="success" data-success="Your message has been received, we will contact you soon."
                      style={{display:"none"}}><span class="contact_success">Your message has been received, we will contact
                        you soon.</span></div>
                    <div class="empty_notice" style={{display:"none"}}><span>Please Fill Required Fields!</span></div>
                    <div class="items_wrap">
                      <div class="items">
                        <div class="item half">
                          <div class="input_wrapper "><input type="text" name="name" id="name" placeholder='Enter Your Name'/></div>
                        </div>
                        <div class="item half">
                          <div class="input_wrapper "><input type="email" name="email" id="email" placeholder='Enter Your Email'/></div>
                        </div>
                        {/* <div class="item">
                          <div class="input_wrapper "><input type="text" id="phone" name="phone" /><span
                              class="moving_placeholder">Phone</span></div>
                        </div> */}
                        <div class="item">
                          <div class="input_wrapper "><textarea name="msg" id="message" placeholder='Write Something'></textarea></div>
                        </div>
                        <div class="item"><a href="mailto:eshwarsugan5@gmail.com">Send Message</a></div>
                      </div>
                    </div>
                  </form>
                  <div class="resumo_fn_contact_info">
                    <p>Address</p>
                    <h3>143/1 Janshi nagar, Erode, India</h3>
                    <p>Phone</p>
                    <h3><a href="tel:+7068980751">(+91) 86672 54875</a></h3>
                    <p>Email</p>
                    <p><h3><a class="fn__link" href="mailto:eshwarsugan5@gmail.com">eshwarsugan5@gmail.com</a></h3></p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <footer id="footer">
            <div class="footer_top"><a href="#" class="resumo_fn_totop"><span></span></a></div>
            <div class="footer_content">
              <div class="container">
                <p>Developed by
                  {/* <!-- -->  */}
                  <a class="fn__link" href="/" target="_blank"
                    rel="noreferrer">&nbsp; Suganesh Flavio</a>
                </p>
              </div>
            </div>
          </footer>
        </div>
        <div class="resumo_fn_right"><a href="#" class="menu_trigger"><span class="text">Menu</span><span
              class="hamb"><span></span><span></span><span></span></span></a>
          <div class="right_in">
            <div class="right_top">
              <div class="border1"></div>
              <div class="border2"></div>
              <div class="img_holder"><img src="img/thumb/square.jpg" alt="image" />
                <div class="abs_img" data-bg-img={img} style={{backgroundImage: "url(img/right1.jpg)"}}></div>
              </div>
              <div class="title_holder">
                <h5>Hi There! I am</h5>
                <p class="h3"><span class="animated_title"></span></p>
              </div>
            </div>
            <div class="right_bottom"><a href="#contact"><span class="circle"></span><span class="text">I’m available
                  for a freelance job. Hire me</span></a></div>
          </div>
        </div>
      </div><a href="#" class="resumo_fn_nav_overlay"></a>
      <div class="resumo_fn_navigation"><a href="#" class="closer"></a>
        <div class="nav_in">
          <nav id="nav">
            <h3 class="label">Menu</h3>
            <ul>
              <li style={{transitionDelay:"0ms"}}><a href="#home">Home</a></li>
              <li style={{transitionDelay:"0ms"}}><a href="#about">About</a></li>
              <li style={{transitionDelay:"0ms"}}><a href="#portfolio">Portfolio</a></li>
              <li style={{transitionDelay:"0ms"}}><a href="#services">Services</a></li>
              <li style={{transitionDelay:"0ms"}}><a href="#customers">Customers</a></li>
              <li style={{transitionDelay:"0ms"}}><a href="#news">News &amp; Tips</a></li>
              <li style={{transitionDelay:"0ms"}}><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <div class="nav_footer ">
            <div class="social">
              {/* <ul>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="681pt"
                      viewBox="-21 -81 681.33464 681" width="681pt" class="fn__svg replaced-svg">
                      <path
                        d="m200.964844 515.292969c241.050781 0 372.871094-199.703125 372.871094-372.871094 0-5.671875-.117188-11.320313-.371094-16.9375 25.585937-18.5 47.824218-41.585937 65.371094-67.863281-23.480469 10.441406-48.753907 17.460937-75.257813 20.636718 27.054687-16.230468 47.828125-41.894531 57.625-72.488281-25.320313 15.011719-53.363281 25.917969-83.214844 31.808594-23.914062-25.472656-57.964843-41.402344-95.664062-41.402344-72.367188 0-131.058594 58.6875-131.058594 131.03125 0 10.289063 1.152344 20.289063 3.398437 29.882813-108.917968-5.480469-205.503906-57.625-270.132812-136.921875-11.25 19.363281-17.742188 41.863281-17.742188 65.871093 0 45.460938 23.136719 85.605469 58.316407 109.082032-21.5-.660156-41.695313-6.5625-59.351563-16.386719-.019531.550781-.019531 1.085937-.019531 1.671875 0 63.46875 45.171875 116.460938 105.144531 128.46875-11.015625 2.996094-22.605468 4.609375-34.558594 4.609375-8.429687 0-16.648437-.828125-24.632812-2.363281 16.683594 52.070312 65.066406 89.960937 122.425781 91.023437-44.855469 35.15625-101.359375 56.097657-162.769531 56.097657-10.5625 0-21.003906-.605469-31.2617188-1.816407 57.9999998 37.175781 126.8710938 58.871094 200.8867188 58.871094">
                      </path>
                    </svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" id="Bold"
                      enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512"
                      class="fn__svg replaced-svg">
                      <path
                        d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z">
                      </path>
                    </svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px"
                      viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve"
                      class="fn__svg replaced-svg">
                      <path
                        d="M373.659,0H138.341C62.06,0,0,62.06,0,138.341v235.318C0,449.94,62.06,512,138.341,512h235.318 C449.94,512,512,449.94,512,373.659V138.341C512,62.06,449.94,0,373.659,0z M470.636,373.659 c0,53.473-43.503,96.977-96.977,96.977H138.341c-53.473,0-96.977-43.503-96.977-96.977V138.341 c0-53.473,43.503-96.977,96.977-96.977h235.318c53.473,0,96.977,43.503,96.977,96.977V373.659z">
                      </path>
                      <path
                        d="M370.586,238.141c-3.64-24.547-14.839-46.795-32.386-64.342c-17.547-17.546-39.795-28.746-64.341-32.385 c-11.176-1.657-22.507-1.657-33.682,0c-30.336,4.499-57.103,20.541-75.372,45.172c-18.269,24.631-25.854,54.903-21.355,85.237 c4.499,30.335,20.541,57.102,45.172,75.372c19.996,14.831,43.706,22.619,68.153,22.619c5.667,0,11.375-0.418,17.083-1.265 c30.336-4.499,57.103-20.541,75.372-45.172C367.5,298.747,375.085,268.476,370.586,238.141z M267.791,327.632 c-19.405,2.882-38.77-1.973-54.527-13.66c-15.757-11.687-26.019-28.811-28.896-48.216c-2.878-19.405,1.973-38.77,13.66-54.527 c11.688-15.757,28.811-26.019,48.217-28.897c3.574-0.53,7.173-0.795,10.772-0.795s7.199,0.265,10.773,0.796 c32.231,4.779,57.098,29.645,61.878,61.877C335.608,284.268,307.851,321.692,267.791,327.632z">
                      </path>
                      <path
                        d="M400.049,111.951c-3.852-3.851-9.183-6.058-14.625-6.058c-5.442,0-10.773,2.206-14.625,6.058 c-3.851,3.852-6.058,9.174-6.058,14.625c0,5.451,2.207,10.773,6.058,14.625c3.852,3.851,9.183,6.058,14.625,6.058 c5.442,0,10.773-2.206,14.625-6.058c3.851-3.852,6.058-9.183,6.058-14.625C406.107,121.133,403.9,115.802,400.049,111.951z">
                      </path>
                    </svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="579.148px"
                      height="579.148px" viewBox="0 0 579.148 579.148" style="enable-background:new 0 0 579.148 579.148"
                      xml:space="preserve" class="fn__svg replaced-svg">
                      <g>
                        <g>
                          <path
                            d="M434.924,38.847C390.561,12.954,342.107,0.01,289.574,0.01c-52.54,0-100.992,12.944-145.356,38.837 C99.854,64.741,64.725,99.87,38.837,144.228C12.944,188.597,0,237.049,0,289.584c0,58.568,15.955,111.732,47.883,159.486 c31.922,47.768,73.771,83.08,125.558,105.949c-1.01-26.896,0.625-49.137,4.902-66.732l37.326-157.607 c-6.285-12.314-9.425-27.645-9.425-45.999c0-21.365,5.404-39.217,16.212-53.538c10.802-14.333,24.003-21.5,39.59-21.5 c12.564,0,22.246,4.143,29.034,12.448c6.787,8.292,10.184,18.727,10.184,31.292c0,7.797-1.451,17.289-4.334,28.47 c-2.895,11.187-6.665,24.13-11.31,38.837c-4.651,14.701-7.98,26.451-9.994,35.252c-3.525,15.33-0.63,28.463,8.672,39.4 c9.295,10.936,21.616,16.4,36.952,16.4c26.898,0,48.955-14.951,66.176-44.865c17.217-29.914,25.826-66.236,25.826-108.973 c0-32.925-10.617-59.701-31.859-80.312c-21.242-20.606-50.846-30.918-88.795-30.918c-42.486,0-76.862,13.642-103.123,40.906 c-26.267,27.277-39.401,59.896-39.401,97.84c0,22.625,6.414,41.609,19.229,56.941c4.272,5.029,5.655,10.428,4.149,16.205 c-0.508,1.512-1.511,5.281-3.017,11.309c-1.505,6.029-2.515,9.934-3.017,11.689c-2.014,8.049-6.787,10.564-14.333,7.541 c-19.357-8.043-34.064-21.99-44.113-41.85c-10.055-19.854-15.08-42.852-15.08-68.996c0-16.842,2.699-33.685,8.103-50.527 c5.404-16.842,13.819-33.115,25.264-48.832c11.432-15.698,25.135-29.596,41.102-41.659c15.961-12.069,35.38-21.738,58.256-29.04 c22.871-7.283,47.51-10.93,73.904-10.93c35.693,0,67.744,7.919,96.146,23.751c28.402,15.839,50.086,36.329,65.043,61.463 c14.951,25.135,22.436,52.026,22.436,80.692c0,37.705-6.541,71.641-19.607,101.807c-13.072,30.166-31.549,53.855-55.43,71.072 c-23.887,17.215-51.035,25.826-81.445,25.826c-15.336,0-29.664-3.58-42.986-10.748c-13.33-7.166-22.503-15.648-27.528-25.453 c-11.31,44.486-18.097,71.018-20.361,79.555c-4.78,17.852-14.584,38.457-29.413,61.836c26.897,8.043,54.296,12.062,82.198,12.062 c52.534,0,100.987-12.943,145.35-38.83c44.363-25.895,79.492-61.023,105.387-105.393c25.887-44.365,38.838-92.811,38.838-145.352 c0-52.54-12.951-100.985-38.838-145.355C514.422,99.87,479.287,64.741,434.924,38.847z">
                          </path>
                        </g>
                      </g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                    </svg></a></li>
                <li><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px"
                      viewBox="0 0 511.958 511.958" style="enable-background:new 0 0 511.958 511.958"
                      xml:space="preserve" class="fn__svg replaced-svg">
                      <g>
                        <g>
                          <g>
                            <path
                              d="M210.624,240.619c10.624-5.344,18.656-11.296,24.16-17.728c9.792-11.584,14.624-26.944,14.624-45.984 c0-18.528-4.832-34.368-14.496-47.648c-16.128-21.632-43.424-32.704-82.016-33.28H0v312.096h142.56 c16.064,0,30.944-1.376,44.704-4.192c13.76-2.848,25.664-8.064,35.744-15.68c8.96-6.624,16.448-14.848,22.4-24.544 c9.408-14.656,14.112-31.264,14.112-49.76c0-17.92-4.128-33.184-12.32-45.728C238.912,255.627,226.752,246.443,210.624,240.619z M63.072,150.187h68.864c15.136,0,27.616,1.632,37.408,4.864c11.328,4.704,16.992,14.272,16.992,28.864 c0,13.088-4.32,22.24-12.864,27.392c-8.608,5.152-19.776,7.744-33.472,7.744H63.072V150.187z M171.968,348.427 c-7.616,3.68-18.336,5.504-32.064,5.504H63.072v-83.232h77.888c13.568,0.096,24.128,1.888,31.68,5.248 c13.44,6.08,20.128,17.216,20.128,33.504C192.768,328.651,185.856,341.579,171.968,348.427z">
                            </path>
                            <rect x="327.168" y="110.539" width="135.584" height="38.848"></rect>
                            <path
                              d="M509.856,263.851c-2.816-18.08-9.024-33.984-18.688-47.712c-10.592-15.552-24.032-26.944-40.384-34.144 c-16.288-7.232-34.624-10.848-55.04-10.816c-34.272,0-62.112,10.72-83.648,32c-21.472,21.344-32.224,52.032-32.224,92.032 c0,42.656,11.872,73.472,35.744,92.384c23.776,18.944,51.232,28.384,82.4,28.384c37.728,0,67.072-11.232,88.032-33.632 c13.408-14.144,20.992-28.064,22.656-41.728H446.24c-3.616,6.752-7.808,12.032-12.608,15.872 c-8.704,7.04-20.032,10.56-33.92,10.56c-13.216,0-24.416-2.912-33.76-8.704c-15.424-9.28-23.488-25.536-24.512-48.672h170.464 C512.16,289.739,511.52,274.411,509.856,263.851z M342.976,269.835c2.24-15.008,7.68-26.912,16.32-35.712 c8.64-8.768,20.864-13.184,36.512-13.216c14.432,0,26.496,4.128,36.32,12.416c9.696,8.352,15.168,20.48,16.288,36.512H342.976z">
                            </path>
                          </g>
                        </g>
                      </g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                    </svg></a></li>
              </ul> */}
            </div>
            <div class="copyright">
              {/* <!-- --> */}
              Developed by  <a href="/" target="_blank"
                rel="noreferrer">&nbsp; Suganesh Flavio</a>
            </div>
          </div>
        </div>
      </div>
      <div class="frenify-cursor cursor-outer" data-default="yes" data-link="yes" data-slider="yes"><span
          class="fn-cursor"></span></div>
      <div class="frenify-cursor cursor-inner" data-default="yes" data-link="yes" data-slider="yes"><span
          class="fn-cursor"><span class="fn-left"></span><span class="fn-right"></span></span></div>
    </div>
  </div>
    </div>
  );
}

export default App;
