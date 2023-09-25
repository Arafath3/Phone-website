const loadPhone = async (searchText = "iphone", isShowing) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  displayPhones(phones, isShowing);
};

const displayPhones = (phones) => {
  // console.log(phones);

  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.innerHTML = "";
  const showALL = document.getElementById("show-all-container");
  if (phones.length > 12 && !isShowing) {
    showALL.classList.remove = "hidden";
  } else {
    showALL.classList.add = "hidden";
  }
  if (!isShowing) {
    phones = phones.slice(0, 12);
  }

  // ! ForEach on each phones
  phones.forEach((phone) => {
    const phoneCard = document.createElement("div");
    phoneCard.classList = "card w-[364px] mx-auto bg-base-100 shadow-xl";
    phoneCard.innerHTML = `
    <figure class="px-10 pt-10 flex justify-center">
              <img
                src="${phone.image}"
                alt=""
                class="rounded-xl"
              />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title text-2xl font-bold">${phone.phone_name}</h2>
              <p class="my-3 w-[291px] mx-auto">There are many variations of passages of available, but the majority have suffered"</p>
                <button class="btn text-white bg-[#0D6EFD] text-xl font-bold px-10">Show Details</button>
              </div>
            </div>
            `;
    phoneContainer.appendChild(phoneCard);
  });
  showLoadingRing(false);
};

// ? search function

const searchPhone = (isShowing) => {
  showLoadingRing(true);
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  loadPhone(searchText, isShowing);
};

// * Show loading Screen

const showLoadingRing = (isLoading) => {
  const loadingRing = document.getElementById("loading-ring-container");
  if (isLoading) {
    loadingRing.classList.remove("hidden");
  } else {
    loadingRing.classList.add("hidden");
  }
};

// ! Show all section
const showAllPhone = (isShowing) => {
  const showALL = document.getElementById("show-all-container");
  if (isShowing) {
    showALL.classList.remove = "hidden";
  } else {
    showALL.classList.add = "hidden";
  }
};
// loadPhone();
