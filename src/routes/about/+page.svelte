<header>
    <div class="title">
        <h3>The creative crew</h3>
    </div>
    <div class="content">
        <h5>who we are</h5>
        <p>We are team of creatively diverse. driven. innovative individuals working in various locations from the world.</p>
    </div>
</header>

<main>

    <div class="profile">
        <figure data-value="product owner">
            <img src="https://rvs-team-page.onrender.com/photo1.png" alt="">
            <figcaption>bill mahoney</figcaption>
        </figure>
    </div>

    <div class="profile">
        <figure data-value="art director">
            <img src="https://rvs-team-page.onrender.com/photo2.png" alt="">
            <figcaption>saba cabrera</figcaption>
        </figure>
    </div>

    <div class="profile">
        <figure data-value="tech lead">
            <img src="https://rvs-team-page.onrender.com/photo3.png" alt="">
            <figcaption>shae le</figcaption>
        </figure>
    </div>

    <div class="profile">
        <figure data-value="ux designer">
            <img src="https://rvs-team-page.onrender.com/photo4.png" alt="">
            <figcaption>skylah lu</figcaption>
        </figure>
    </div>

    <div class="profile">
        <figure data-value="developer">
            <img src="https://rvs-team-page.onrender.com/photo5.png" alt="">
            <figcaption>griff richards</figcaption>
        </figure>
    </div>

    <div class="profile">
        <figure data-value="developer">
            <img src="https://rvs-team-page.onrender.com/photo6.png" alt="">
            <figcaption>stan john</figcaption>
        </figure>
    </div>

</main>
<style>
 
header {
  height: 20%;
  display: flex;
  align-items: center;
  column-gap: 50px;
}
header .title,
header .content {
  flex: 1;
}
header .title h3 {
  font-size: 36px;
}
header .content h5 {
  font-size: 16px;
  margin-bottom: 10px;
  text-transform: uppercase;
}
header .content p {
  font-size: 14px;
}
main {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 50px;
  row-gap: 70px;
  padding: 50px 0px;
}
main .profile {
  display: flex;
  justify-content: center;
  position: relative;
}
main .profile figure {
  width: 85%;
  display: flex;
  flex-direction: column;
  position: relative;
}
main .profile figure img {
  width: 80%;
}
main .profile figure figcaption {
  font-size: 16px;
  font-weight: 500;
  margin-top: 12px;
  text-transform: capitalize;
  cursor: pointer;
}
main .profile figure::after {
  content: attr(data-value);
  width: 100%;
  transform-origin: 0 0;
  transform: rotate(90deg);
  position: absolute;
  text-transform: uppercase;
  font-size: 12px;
  right: -92%;
}
main .profile:nth-child(2) {
  margin-top: 70px;
}
main .profile:nth-child(4) {
  margin-top: -70px;
}
main .profile:nth-child(6) {
  margin-top: -70px;
}
footer {
  height: 5%;
  color: #bdbdbd;
  display: grid;
  place-items: center;
  font-size: 12px;
}
footer a {
  text-decoration: none;
  color: inherit;
}

@media screen and (max-width: 1440px) {
 
  main {
    column-gap: 50px;
  }
}
@media screen and (max-width: 1024px) {

  main {
    column-gap: 35px;
  }
}
@media screen and (max-width: 768px) {

  main {
    column-gap: 25px;
  }
}
@media screen and (max-width: 600px) {

  header {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 20px;
  }
  header .title {
    align-self: flex-start;
  }
  header .title h3 {
    font-size: 30px;
  }
  main {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 0px;
    row-gap: 0px;
  }
  main .profile:nth-child(2), main .profile:nth-child(4), main .profile:nth-child(6) {
    margin-top: 50px;
  }
  main .profile:nth-child(3), main .profile:nth-child(5) {
    margin-top: 0px;
  }
}
</style>