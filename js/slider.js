const controls = document.querySelectorAll(".control")
let currentTestimonial = 0
const testimonials = document.querySelectorAll(".testimonial")
const maxTestimonials = testimonials.length

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("btn-back")

    if (isLeft) {
      currentTestimonial -= 1
    } else {
      currentTestimonial += 1
    }

    if (currentTestimonial >= maxTestimonials) {
      currentTestimonial = 0
    }

    if (currentTestimonial < 0) {
      currentTestimonial = maxTestimonials - 1
    }

    testimonials.forEach((testimonial) =>
      testimonial.classList.remove("current")
    )

    testimonials[currentTestimonial].scrollIntoView({
      behavior: "smooth",
      inline: "center",
    })

    testimonials[currentTestimonial].classList.add("current")
  })
})
