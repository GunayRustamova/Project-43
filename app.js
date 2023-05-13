// Javascript code
// For Navbar active highlight
// JS function for home 
function home() {
    const home = document.querySelector(".navbar-home");
    const about = document.querySelector(".navbar-about");
    const work_process = document.querySelector(".navbar-work-process");
    const testimonials = document.querySelector(".navbar-testimonials");
    const pricing_tables = document.querySelector(".navbar-pricing-tables");
    const blog_entries = document.querySelector(".navbar-blog-entries");
    const contact_us = document.querySelector(".navbar-contact-us");

    home.classList.add("active");
    about.classList.remove("active");
    work_process.classList.remove("active");
    testimonials.classList.remove("active");
    pricing_tables.classList.remove("active");
    blog_entries.classList.remove("active");
    contact_us.classList.remove("active");
}
// JS function for about
function about() {
    const home = document.querySelector(".navbar-home");
    const about = document.querySelector(".navbar-about");
    const work_process = document.querySelector(".navbar-work-process");
    const testimonials = document.querySelector(".navbar-testimonials");
    const pricing_tables = document.querySelector(".navbar-pricing-tables");
    const blog_entries = document.querySelector(".navbar-blog-entries");
    const contact_us = document.querySelector(".navbar-contact-us");

    home.classList.remove("active");
    about.classList.add("active");
    work_process.classList.remove("active");
    testimonials.classList.remove("active");
    pricing_tables.classList.remove("active");
    blog_entries.classList.remove("active");
    contact_us.classList.remove("active");
}
// JS function about Work Process
function work_process() {
    const home = document.querySelector(".navbar-home");
    const about = document.querySelector(".navbar-about");
    const work_process = document.querySelector(".navbar-work-process");
    const testimonials = document.querySelector(".navbar-testimonials");
    const pricing_tables = document.querySelector(".navbar-pricing-tables");
    const blog_entries = document.querySelector(".navbar-blog-entries");
    const contact_us = document.querySelector(".navbar-contact-us");

    home.classList.remove("active");
    about.classList.remove("active");
    work_process.classList.add("active");
    testimonials.classList.remove("active");
    pricing_tables.classList.remove("active");
    blog_entries.classList.remove("active");
    contact_us.classList.remove("active");
}
// JS function about Testimonials
function testimonials() {
    const home = document.querySelector(".navbar-home");
    const about = document.querySelector(".navbar-about");
    const work_process = document.querySelector(".navbar-work-process");
    const testimonials = document.querySelector(".navbar-testimonials");
    const pricing_tables = document.querySelector(".navbar-pricing-tables");
    const blog_entries = document.querySelector(".navbar-blog-entries");
    const contact_us = document.querySelector(".navbar-contact-us");

    home.classList.remove("active");
    about.classList.remove("active");
    work_process.classList.remove("active");
    testimonials.classList.add("active");
    pricing_tables.classList.remove("active");
    blog_entries.classList.remove("active");
    contact_us.classList.remove("active");
}
// JS function about Pricing Tables
function pricing_tables() {
    const home = document.querySelector(".navbar-home");
    const about = document.querySelector(".navbar-about");
    const work_process = document.querySelector(".navbar-work-process");
    const testimonials = document.querySelector(".navbar-testimonials");
    const pricing_tables = document.querySelector(".navbar-pricing-tables");
    const blog_entries = document.querySelector(".navbar-blog-entries");
    const contact_us = document.querySelector(".navbar-contact-us");

    home.classList.remove("active");
    about.classList.remove("active");
    work_process.classList.remove("active");
    testimonials.classList.remove("active");
    pricing_tables.classList.add("active");
    blog_entries.classList.remove("active");
    contact_us.classList.remove("active");
}
// JS function Blog Entries
function blog_entries() {
    const home = document.querySelector(".navbar-home");
    const about = document.querySelector(".navbar-about");
    const work_process = document.querySelector(".navbar-work-process");
    const testimonials = document.querySelector(".navbar-testimonials");
    const pricing_tables = document.querySelector(".navbar-pricing-tables");
    const blog_entries = document.querySelector(".navbar-blog-entries");
    const contact_us = document.querySelector(".navbar-contact-us");

    home.classList.remove("active");
    about.classList.remove("active");
    work_process.classList.remove("active");
    testimonials.classList.remove("active");
    pricing_tables.classList.remove("active");
    blog_entries.classList.add("active");
    contact_us.classList.remove("active");
}
// JS function Contact Us
function contact_us() {
    const home = document.querySelector(".navbar-home");
    const about = document.querySelector(".navbar-about");
    const work_process = document.querySelector(".navbar-work-process");
    const testimonials = document.querySelector(".navbar-testimonials");
    const pricing_tables = document.querySelector(".navbar-pricing-tables");
    const blog_entries = document.querySelector(".navbar-blog-entries");
    const contact_us = document.querySelector(".navbar-contact-us");

    home.classList.remove("active");
    about.classList.remove("active");
    work_process.classList.remove("active");
    testimonials.classList.remove("active");
    pricing_tables.classList.remove("active");
    blog_entries.classList.remove("active");
    contact_us.classList.add("active");
}
