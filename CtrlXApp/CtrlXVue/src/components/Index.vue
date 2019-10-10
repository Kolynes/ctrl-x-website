<template>
    <v-app class="v-app overflow-y-hidden" v-if="loaded">
         <v-toolbar app :color="scrolled? 'rgba(0,0,0,0.7)' : 'transparent' " :flat="!scrolled" dark>
            <v-avatar size="50" v-if="scrolled">
                <img src="/static/CtrlXApp/images/logo.png"/>
            </v-avatar>
            <v-spacer/>
            <div v-if="!$vuetify.breakpoint.smAndDown">
                <v-btn flat @click="$vuetify.goTo('#about');">about</v-btn>
                <v-btn flat @click="$vuetify.goTo('#project-x');">Project-x</v-btn>
                <v-btn flat @click="$vuetify.goTo('#services');">services</v-btn>
                <v-btn flat @click="$vuetify.goTo('#pricing');">pricing</v-btn>
                <v-btn flat @click="callToAction = true">contact us</v-btn>
                <v-btn flat @click="showJoinForm = true">join us</v-btn>
            </div>
            <v-btn icon v-else @click="showDrawer = true">
                <v-icon>menu</v-icon>
            </v-btn>
        </v-toolbar>
        <v-navigation-drawer right app v-model="showDrawer" dark v-if="$vuetify.breakpoint.smAndDown">
            <center>
                <img style="width: 150px" class="wow bounceIn" src="/static/CtrlXApp/images/logo.png"/>
            </center>
            <v-divider/>
            <v-list>
                <v-list-tile @click="$vuetify.goTo('#about'); showDrawer = false">
                    <v-list-tile-action>
                        <v-icon>info</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <span>ABOUT</span>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="$vuetify.goTo('#project-x'); showDrawer = false">
                    <v-list-tile-action>
                        <v-avatar size="25">
                            <v-img src="/static/CtrlXApp/images/project-x-letter.png"/>
                        </v-avatar>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <span>PROJECT-X</span>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="$vuetify.goTo('#services'); showDrawer = false">
                    <v-list-tile-action>
                        <v-icon>fas fa-briefcase</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <span>SERVICES</span>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="$vuetify.goTo('#pricing'); showDrawer = false">
                    <v-list-tile-action>
                        <v-icon>attach_money</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <span>PRICING</span>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="callToAction = true; showDrawer = false">
                    <v-list-tile-action>
                        <v-icon>phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <span>CONTACT US</span>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="showJoinForm = true; showDrawer = false">
                    <v-list-tile-action>
                        <v-icon>arrow_forward</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <span>JOIN US</span>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <div class="jumbotron">
            <v-fade-transition>
                <div class="backdrop" id="one" v-if="jumbo == 1"/>
            </v-fade-transition>
            <v-fade-transition>
                <div class="backdrop" id="two" v-if="jumbo == 2"/>
            </v-fade-transition>
            <v-fade-transition>
                <div class="backdrop" id="three" v-if="jumbo == 3"/>
            </v-fade-transition>
            <v-layout row wrap align-center class="py-5">
                <v-flex xs12 sm6>
                    <center class="">
                        <img style="width: 300px; height:281.34px" class="wow bounceInDown" src="/static/CtrlXApp/images/logo.png"/>
                        <p style="font-family: monospace; color: white"><b>Empower . Collaborate . Progress</b></p><br>
                        <v-btn round class="font-weight-bold primary wow slideInLeft" @click="callToAction = true">Make an inquiry</v-btn>
                        <v-btn round class="font-weight-bold secondary black--text wow slideInRight" @click="showJoinForm = true">join ctrl-x hub</v-btn><br>
                        <v-btn icon class="primary white--text wow flip" href="https://facebook.com/ctrlxhub">
                            <v-icon color="#fff">fab fa-facebook-f</v-icon>
                        </v-btn>
                        <v-btn icon class="secondary white--text wow flip" href="https://twitter.com/ctrlxhub">
                            <v-icon color="#000">fab fa-twitter</v-icon>
                        </v-btn>
                    </center>
                </v-flex>
                <v-flex class="white--text" xs12 sm6 v-if="!$vuetify.breakpoint.xs">
                    <v-scroll-y-transition style="position: absolute;">
                        <div v-if="jumbo == 1" style="max-width: 500px">
                            <h2 class="display-1">Uninterrupted Power Supply</h2>
                            <div class="underline yellow"/>
                            <span class="subheading">Work for 10 hours a day nonstop!</span>
                        </div>
                    </v-scroll-y-transition>
                    <v-scroll-y-transition style="position: absolute;">
                        <div v-if="jumbo == 2" style="max-width: 500px">
                            <h2 class="display-1">Comfortable Working Space</h2>
                            <div class="underline yellow"/>
                            <span class="subheading">Nothing else beats that comfortable yet engaging feeling of an office</span>
                        </div>
                    </v-scroll-y-transition>
                    <v-scroll-y-transition style="position: absolute;">             
                        <div v-if="jumbo == 3" style="max-width: 500px">
                            <h2 class="display-1">A Great Community</h2>
                            <div class="underline yellow"/>
                            <span class="subheading">You get to meet new people from similar and different fields, collaborate and build something new!</span>
                        </div>
                    </v-scroll-y-transition>
                </v-flex>
            </v-layout>
        </div>
        <div>
            <v-fab-transition>
                <v-btn fab bottom left fixed color="secondary black--text" v-if="scrolled" @click="$vuetify.goTo(0)">
                    <v-icon>keyboard_arrow_up</v-icon>
                </v-btn>
            </v-fab-transition>
            <v-container  grid-list-xl>
                <v-layout wrap id="about" align-center justify-space-around>
                    <v-flex xs12 sm6>
                        <h1>Who we are</h1>
                        <div class="underline primary wow"/>
                        <p class="body-1">
                            Ctrl-X Hub (pronounced "control ex hub") is a place that provides creatives and techies a conducive and collaborative working environment.
                        </p>
                        <p class="body-1">
                            Being an initiative of <a href="https://uzucorp.com">The Uzu Corporation</a>, Ctrl-X Hub's primary aim is to uplift the tech community here in Owerri and Nigeria in general by providing tech enthusiasts and creatives (graphics designers and media personnel) with the basic necessities needed to boost productivity.
                        </p>
                        <p class="body-1">
                            We have succeeded in creating a physical meeting point that has brought like minded individuals together
                        </p>
                    </v-flex>
                    <v-flex xs12 sm6 class="wow fadeInDown" style="height: 300px" d-flex align-center>
                        <v-flex xs1/>
                        <v-flex xs10>
                            <v-fab-transition>
                                <v-img src="/static/CtrlXApp/images/coworking.svg" v-if="jumbo == 1" :key="1"/>
                                <v-img src="/static/CtrlXApp/images/developer-activity.svg" v-if="jumbo == 2" :key="2"/>
                                <v-img src="/static/CtrlXApp/images/work-time.svg" v-if="jumbo == 3" :key="3"/>
                            </v-fab-transition>
                        </v-flex>
                        <v-flex xs1/>
                    </v-flex>
                </v-layout>
                <v-layout wrap class="mt-4" id="project-x" align-center>
                    <v-flex xs12 v-if="$vuetify.breakpoint.xs">
                        <h1>We are building a network of digitally empowered people</h1>
                        <div class="underline primary wow"/>
                    </v-flex>
                    <v-flex xs12 sm6 class="wow fadeInDown">
                        <v-img src="/static/CtrlXApp/images/project-x-logo.png"/>
                    </v-flex>
                    <v-flex xs12 sm6>
                        <template v-if="$vuetify.breakpoint.smAndUp">
                            <h1>We are building a network of digitally empowered people</h1>
                            <div class="underline primary wow"/>
                        </template>
                        <p class="body-1">
                            Project-X is an initiative tailored to groom newbies in various digital skills. These include
                        </p>
                        <ul class="body-1">
                            <li>Web Development</li>
                            <li>Mobile Development</li>
                            <li>Digital Marketing</li>
                            <li>UI/UX Engineering</li>
                        </ul><br>
                        <p class="body-1">
                            This initiative is not just about imparting skills, but also fostering a network of self-employed people. 
                        </p>
                    </v-flex>
                </v-layout>
                <v-layout wrap >
                    <v-flex xs12 sm6 class="wow fadeIn">
                        <h2>Testimonies</h2>
                        <div class="underline grey darken-4 wow"/>
                        <p>The impact of Project-X on our community has been massive. It has set them on a path to great things. We say thank you to all those who gave a positive feedback.</p>
                        <p>Project-X vows to continue to make such great impacts to the tech community</p>
                        <v-img src="/static/CtrlXApp/images/workshop1.png"/>
                    </v-flex>
                    <v-flex xs12 sm6 md3 class="wow fadeInRight">
                        <blockquote class="twitter-tweet" style="height: 200px"><p lang="en" dir="ltr">Participated in Project-X from ctrl-x hub. Learnt the basics of PHP and why liveserver can&#39;t run dynamics websites 🤓<a href="https://twitter.com/ctrlxhub?ref_src=twsrc%5Etfw">@ctrlxhub</a> <a href="https://twitter.com/nimbbly?ref_src=twsrc%5Etfw">@nimbbly</a> <a href="https://t.co/UO6xPp4mBG">pic.twitter.com/UO6xPp4mBG</a></p>&mdash; Victor Chukwujama (@ChukwujamaV) <a href="https://twitter.com/ChukwujamaV/status/1172929997587255299?ref_src=twsrc%5Etfw">September 14, 2019</a></blockquote>
                    </v-flex>
                    <v-flex xs12 md3 v-if="!$vuetify.breakpoint.sm" class="wow fadeInRight">
                        <blockquote class="twitter-tweet" style="height: 200px"><p lang="en" dir="ltr">Today was quiet stressful but it was worth it. I had a nice time with <a href="https://twitter.com/nimbbly?ref_src=twsrc%5Etfw">@nimbbly</a> and <a href="https://twitter.com/ctrlxhub?ref_src=twsrc%5Etfw">@ctrlxhub</a> in owerri, Nigeria. Minds were rubbed, ideas shared and information passed on <a href="https://twitter.com/hashtag/frontend?src=hash&amp;ref_src=twsrc%5Etfw">#frontend</a> and <a href="https://twitter.com/hashtag/backend?src=hash&amp;ref_src=twsrc%5Etfw">#backend</a> <a href="https://twitter.com/hashtag/programming?src=hash&amp;ref_src=twsrc%5Etfw">#programming</a>, <a href="https://twitter.com/hashtag/DigitalMarketing?src=hash&amp;ref_src=twsrc%5Etfw">#DigitalMarketing</a> and <a href="https://twitter.com/hashtag/uidesign?src=hash&amp;ref_src=twsrc%5Etfw">#uidesign</a> <a href="https://twitter.com/hashtag/uxdesign?src=hash&amp;ref_src=twsrc%5Etfw">#uxdesign</a>. <a href="https://twitter.com/hashtag/thank?src=hash&amp;ref_src=twsrc%5Etfw">#thank</a> you so much <a href="https://twitter.com/hashtag/projectx?src=hash&amp;ref_src=twsrc%5Etfw">#projectx</a>. <a href="https://t.co/y2nCszWDTJ">pic.twitter.com/y2nCszWDTJ</a></p>&mdash; Chinemerem D. Akwason (@akwasond) <a href="https://twitter.com/akwasond/status/1172969819647463425?ref_src=twsrc%5Etfw">September 14, 2019</a></blockquote>
                    </v-flex>
                </v-layout>
                <h2 style=" font-style: italic" class="mt-4" id="services">Our Services</h2>
                <div class="underline yellow wow"/>
                <v-layout wrap class="wow fadeIn">
                    <v-flex xs12 sm6 lg3>
                        <v-card>
                            <v-card-text>
                                <center>
                                    <v-avatar size="200" tile>
                                        <img src="/static/CtrlXApp/images/new-ideas.svg"/>
                                    </v-avatar>
                                    <h3>Uninterrupted Power Supply</h3>
                                    <br>
                                    <span>Consistent power, 10 hours a day, 6 days a week!</span>
                                </center>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs12 sm6 lg3>
                        <v-card>
                            <v-card-text>
                                <center>
                                    <v-avatar size="200" tile>
                                        <img src="/static/CtrlXApp/images/developer-activity-2.svg"/>
                                    </v-avatar>
                                    <h3>Comfortable working space</h3>
                                    <br>
                                    <span>No destractions. Just relax and do your thing!</span>
                                </center>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs12 sm6 lg3>
                        <v-card>
                            <v-card-text>
                                <center>
                                    <v-avatar size="200" tile>
                                        <img src="/static/CtrlXApp/images/code-typing.svg"/>
                                    </v-avatar>
                                    <h3>Training and Tech Skillups</h3>
                                    <br>
                                    <span>Tech is the new thing. Learn a skill today!</span>
                                </center>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs12 sm6 lg3>
                        <v-card>
                            <v-card-text>
                                <center>
                                    <v-avatar size="200" tile>
                                        <img src="/static/CtrlXApp/images/conference-speaker.svg"/>
                                    </v-avatar>
                                    <h3>Events and Conference Hall</h3>
                                    <br>
                                    <span>Host a conference or event at an affordable price!</span>
                                </center>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
                <h2 style=" font-style: italic" class="mt-5" id="pricing">Pricing</h2>
                <div class="underline primary wow"/>
                <v-layout wrap class="wow fadeIn">
                    <v-flex xs12 sm6 lg3>
                        <v-card color="primary white--text" class="wow ">
                            <v-card-text>
                                <center>
                                    <v-img src="/static/CtrlXApp/images/naira1.png" width="40" />
                                    <v-avatar tile size="100">
                                        <h2 class="display-2">300</h2>
                                    </v-avatar>
                                    <h3>Daily Plan</h3>
                                </center>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs12 sm6 lg3>
                        <v-card color="secondary" class="wow ">
                            <v-card-text>
                                <center>
                                    <v-img src="/static/CtrlXApp/images/naira1.png" width="40" />
                                    <v-avatar tile size="100">
                                        <h2 class="display-2">1800</h2>
                                    </v-avatar>
                                    <h3>Weekly Plan</h3>
                                </center>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs12 sm6 lg3>
                        <v-card color="grey darken-4 white--text" class="wow ">
                            <v-card-text>
                                <center>
                                    <v-img src="/static/CtrlXApp/images/naira1.png" width="40" />
                                    <v-avatar tile size="100">
                                        <h2 class="display-2">3200</h2>
                                    </v-avatar>
                                    <h3>2-Week Plan</h3>
                                </center>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs12 sm6 lg3>
                        <v-card class="wow ">
                            <v-card-text>
                                <center>
                                    <v-img src="/static/CtrlXApp/images/naira1.png" width="40" />
                                    <v-avatar tile size="100">
                                        <h2 class="display-2">6000</h2>
                                    </v-avatar>
                                    <h3>Monthly Plan</h3>
                                </center>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
                <h2 class="mt-5">We have gained the trust for a number of brands and startups</h2>
                <div class="underline grey darken-4 wow"/>
                <v-layout justify-center align-center class="fadeIn wow">
                    <v-flex xs12 sm2>
                        <v-img src="/static/CtrlXApp/images/xyz.jpeg"/>
                    </v-flex>
                    <v-flex xs12 sm2>
                        <v-img src="/static/CtrlXApp/images/records.png"/>
                    </v-flex>
                    <v-flex xs12 sm2>
                        <v-img src="/static/CtrlXApp/images/tefemblack.png"/>
                    </v-flex>
                    <v-flex xs12 sm2>
                        <v-img src="/static/CtrlXApp/images/nimbbly.png"/>
                    </v-flex>
                </v-layout>
            </v-container>
        </div>
        <v-footer height="auto" >
            <v-card color="#111" style="width:100%" flat class="py-4">
                <v-card-text class="white--text text-xs-center">
                    <v-layout row wrap>
                        <v-flex xs12 d-flex sm4>
                            <div class="text-xs-left">
                                <v-btn small round class="primary wow slideInLeft font-weight-bold" @click="callToAction = true">Make an inquiry</v-btn>
                                <v-btn small round class="secondary black--text wow slideInRight font-weight-bold" @click="showJoinForm = true">join ctrl-x hub</v-btn><br>
                                <v-btn icon class="primary white--text wow flip" href="https://facebook.com/ctrlxhub">
                                    <v-icon color="#fff">fab fa-facebook-f</v-icon>
                                </v-btn>
                                <a href="https://facebook.com/ctrlxhub" class="white--text">facebook.com/ctrlxhub</a><br>
                                <v-btn icon class="secondary white--text wow flip" href="https://twitter.com/ctrlxhub">
                                    <v-icon color="#000">fab fa-twitter</v-icon>
                                </v-btn>
                                <a href="https://twitter.com/ctrlxhub" class="white--text">twitter.com/ctrlxhub</a><br>
                                <iframe v-if="$vuetify.breakpoint.xs" class="mb-3" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15889.005274672933!2d6.9975476!3d5.3786015!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x175ac80138a1fa59!2sCtrl-X%20Hub!5e0!3m2!1sen!2sng!4v1570587514068!5m2!1sen!2sng"height="450" frameborder="0" style="border:0; width:100%" allowfullscreen=""></iframe>
                                <h3 class="body-2 text-xs-center" ><a href="https://www.uzucorp.com" class="white--text"><em><img style="width: 150px;" src="/static/CtrlXApp/images/uzucorpwhitetrans.png"/> <p>Rapidly developed by uzucorp</p></em></a></h3>
                                <h3 class="body-2 text-xs-center"><em>Ctrl-X Hub &copy; 2019</em></h3>
                            </div>
                        </v-flex>
                        <v-flex xs12 sm4>
                            <v-list dark style="background: transparent">
                                <v-list-tile @click="$vuetify.goTo('#about'); showDrawer = false">
                                    <v-list-tile-action>
                                        <v-icon>info</v-icon>
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <span>ABOUT</span>
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile @click="$vuetify.goTo('#project-x'); showDrawer = false">
                                    <v-list-tile-action>
                                        <v-avatar size="25">
                                            <v-img src="/static/CtrlXApp/images/project-x-letter.png"/>
                                        </v-avatar>
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <span>PROJECT-X</span>
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile @click="$vuetify.goTo('#services'); showDrawer = false">
                                    <v-list-tile-action>
                                        <v-icon>fas fa-briefcase</v-icon>
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <span>SERVICES</span>
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile @click="$vuetify.goTo('#pricing'); showDrawer = false">
                                    <v-list-tile-action>
                                        <v-icon>attach_money</v-icon>
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <span>PRICING</span>
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile @click="callToAction = true; showDrawer = false">
                                    <v-list-tile-action>
                                        <v-icon>phone</v-icon>
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <span>CONTACT US</span>
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile @click="showJoinForm = true; showDrawer = false">
                                    <v-list-tile-action>
                                        <v-icon>arrow_forward</v-icon>
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <span>JOIN US</span>
                                    </v-list-tile-content>
                                </v-list-tile>
                            </v-list>
                        </v-flex>
                        <v-flex xs12 d-flex sm4 v-if="$vuetify.breakpoint.smAndUp">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15889.005274672933!2d6.9975476!3d5.3786015!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x175ac80138a1fa59!2sCtrl-X%20Hub!5e0!3m2!1sen!2sng!4v1570587514068!5m2!1sen!2sng" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                        </v-flex>
                    </v-layout>
                </v-card-text>
            </v-card>
        </v-footer>
        <v-dialog v-model="callToAction" width="350">
            <v-card>
                <v-card-text>
                    <v-list>
                        <v-list-tile ripple href="tel:+2348131651917">
                            <v-avatar>
                                <v-icon>phone</v-icon>
                            </v-avatar>
                            <span>Phone 1: +2348131651917</span>
                        </v-list-tile>
                        <v-divider inset/>
                        <v-list-tile ripple href="tel:+2348115716657">
                            <v-avatar>
                                <v-icon>phone</v-icon>
                            </v-avatar>
                            <span>Phone 2: +2348115716657</span>
                        </v-list-tile>
                        <v-divider inset/>
                        <v-list-tile href="https://m.me/ctrlxhub">
                            <v-avatar>
                                <v-icon>fab fa-facebook-messenger</v-icon>
                            </v-avatar>
                            <span> Reach us on Messenger</span>
                        </v-list-tile>
                    </v-list>
                </v-card-text>
            </v-card>
        </v-dialog>
        <v-dialog v-model="showJoinForm" persistent width="300">
            <v-card>
                <v-card-text>
                    <v-layout align-center>
                        <h2 class="subheading font-weight-bold">Join us</h2>
                        <v-spacer/>
                        <v-btn icon style="float: right" @click="showJoinForm = false">
                            <v-icon>close</v-icon>
                        </v-btn>
                    </v-layout>
                    <v-window v-model="windows" touchless>
                        <v-window-item :key="0">
                            <v-form ref="form0" @submit.prevent="next(0)">
                                <v-text-field :rules="[$requiredRule]" label="Full Name" v-model="name" prepend-icon="person_outline"/>
                                <v-text-field :rules="[$requiredRule, $emailRule]" label="Email" v-model="email" prepend-icon="mail_outline"/>
                                <v-text-field :rules="[$requiredRule, $nigerianPhoneRule]" label="Phone" v-model="phone" prepend-icon="phone"/>
                                <v-btn color="primary" small round type="submit">Next</v-btn>
                            </v-form>
                        </v-window-item>
                        <v-window-item :key="1">
                            <v-form ref="form3" @submit.prevent="join">
                                What skills do you have interest in?
                                <v-checkbox label="Web Development" v-model="webDev"/>
                                <v-checkbox label="Mobile App Development" v-model="mobileDev"/>
                                <v-checkbox label="Digital Marketing" v-model="digitalMarketing"/>
                                <v-checkbox label="Content Development" v-model="contentDev"/>
                                <v-select :rules="[$requiredRule]" label="How did you get to know about us?" v-model="reference" :items="['Social Media', 'From a friend', 'A poster, ticket or banner']">
                                    <span slot="prepend" class="font-weight-bold title" >?</span>
                                </v-select>
                                <v-text-field :rules="[$requiredRule]" label="Your Friend's Name" v-model="friend" prepend-icon="person_outline" v-if="reference == 'From a friend'"/>
                                <v-btn color="primary" small round type="submit" :loading="joining">Go</v-btn>
                            </v-form>
                        </v-window-item>
                        <v-window-item :key="2">
                            <center>
                                <v-avatar class="primary mb-2">
                                    <v-icon dark>done</v-icon>
                                </v-avatar><br>
                                <span class="title">Welcome to Ctrl-X Hub</span><br>
                                <span>You will recieve an email from us shortly</span>
                            </center>
                        </v-window-item>
                    </v-window>
                    <v-progress-linear :value="windows/2 * 100" :indeterminate="joining"/>
                </v-card-text>
            </v-card>
        </v-dialog>
        <v-snackbar v-model="showSnackbar" bottom :right="$vuetify.breakpoint.smAndUp">
            <span>
                <v-icon class="ml-2" :color="snackbarMessage.iconColor">{{snackbarMessage.icon}}</v-icon>
                {{snackbarMessage.message}}
            </span>
            <spacer/>
            <v-btn icon @click="showSnackbar = false">
                <v-icon>close</v-icon>
            </v-btn>
        </v-snackbar>
    </v-app>
</template>

<script>
export default {
    data(){
        return{
            callToAction: false,
            scrolled: false,
            loaded: false,
            showJoinForm: false,
            windows: 0,
            joining: false,
            name: "",
            email: "",
            phone: "",
            webDev: false,
            mobileDev: false,
            digitalMarketing: false,
            contentDev: false,
            reference: "",
            friend: "",
            showSnackbar: false,
            snackbarMessage: {},
            jumbo: 1,
            showDrawer: false
        }
    },
    methods: {
        join(){
            if(this.$refs.form3.validate()){
                this.joining = true;
                var content = new FormData()
                content.append("name", this.name)
                content.append("email", this.email)
                content.append("phone", this.phone);
                var skills = "";
                if(this.webDev) skills +=  "Web Development, "
                if(this.mobileDev) skills +=  "Mobile App Development, "
                if(this.digitalMarketing) skills +=  "Digital Marketing, "
                if(this.contentDev) skills +=  "Content Development, "
                content.append("skills", skills);
                content.append("reference", this.reference)
                content.append("friend", this.friend)
                this.$http.request({
                    url: "join/",
                    method: "POST",
                    content
                }).then(response => {
                    response = response.json()
                    this.joining = false
                    if(response.status){
                        this.windows = 2
                    }
                }).catch(reason => {
                    console.log(reason)
                    this.joining = false
                    this.snackbarMessage = {icon: "warning", iconColor: "red", message: "Failed to process the request. Please try again later"}
                    this.showSnackbar = true
                })
            }
        },
        next(key){
            if(this.$refs[`form${key}`].validate()){
                this.windows++;
            }
        }
    },
    computed: {
        scroller(){
            return scrollY == 0? "transparent" : "indigo"
        }
    },
    watch: {
        showJoinForm(newValue){
            if(!newValue){
                this.windows = 0;
                for(var i in [0, 1]){
                    this.$refs[`form${i}`].reset()
                }
            }
        }
    },
    mounted(){
        document.addEventListener("scroll", event => this.scrolled = scrollY > 0);
        new WOW({offset: 100}).init();
        setTimeout(() =>this.loaded = true, 500);
        setInterval(() => {
            if(this.jumbo == 3){
                this.jumbo = 1
            }
            else {
                this.jumbo++
            }
        }, 10000)
        
    }
}
</script>

<style lang="scss">
    .jumbotron{
        min-height: 70vh;
        position: relative;
        .backdrop{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-size: cover;
            filter: blur(3px);
            z-index: 0;
            &#one{
                background-image: url("/static/CtrlXApp/images/building.jpg");
            }
            &#two{
                background-image: url("/static/CtrlXApp/images/hub4.png");
            }
            &#three{
                background-image: url("/static/CtrlXApp/images/community1.png");
            }
        }
        &>*{
            position: relative;
            min-height: inherit;
            background: rgba(0,0,0,0.6)
        }
    }
    .underline{
        height: 10px;
        width: 300px;
        margin: 10px 0;
        animation: underline-animation 4s;
    }
    #about {
        text-align: justify
    }
    @keyframes underline-animation{
        from{
            width: 0px
        }
        to {
            width: 300px
        }
    }
    a{
        text-decoration: none;
    }
</style>
