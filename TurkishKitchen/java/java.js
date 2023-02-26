const menu = [
    {
      id: 1,
      title: "Yuvarlama Soup",
      category: "Soups",
      price: 59.99,
      img:
        "img/yuvarlama.jpg",
      desc: `Yuvarlama soup is made with spiced meatballs, chickpeas, yogurt broth, olive oil, and other optional ingredients.`,
    },
    {
      id: 2,
      title: "Toyga Soup",
      category: "Soups",
      price: 45.99,
      img:
        "img/toyga.jpg",
      desc: `Toyga is a traditional Turkish soup made with a combination of chickpeas, dövme (dehusked wheat), water, flour, yogurt, and butter. Served piping hot.`,
    },
    {
      id: 3,
      title: "Tutmaç Soup",
      category: "Soups",
      price: 59.99,
      img:
        "img/tutmac.jpg",
      desc: ` Tutmaç is a soup made with noodles, lentils, and yogurt. The soup is served in special bowls and accompanied by katık, a type of Turkish sour yogurt..`,
    },
    {
      id: 4,
      title: "Domates Soup",
      category: "Soups",
      price: 29.99,
      img:
        "img/domates.jpg",
      desc: ` Domates soup is a soup featuring simple and fresh flavors. It consists of cooked or roasted tomatoes, onions, garlic, olive oil, flour, and water.  `,
    },
    {
      id: 5,
      title: "Acılı Ezme",
      category: "Meze/Salads",
      price: 22.99,
      img:
        "img/ezme.jpg",
      desc: `Hot spicy freshly mashed tomato with onion and green herbs. `,
    },
    {
      id: 6,
      title: "Piyaz",
      category: "Meze/Salads",
      price: 19.99,
      img:
        "img/piyaz.jpeg",
      desc: `White bean or potato salad with onion and vinegar.`,
    },
    {
      id: 7,
      title: "Bakla Ezmesi",
      category: "Meze/Salads",
      price: 21.99,
      img:
        "img/bakla.jfif",
      desc: `Hummus prepared from broad bean, served with olive oil.`,
    },
    {
      id: 8,
      title: "Kuru Fasulye",
      category: "Vegetarian",
      price: 39.99,
      img:
        "img/kuru.fasulye.jpg",
      desc: `White bean stew made with tomatoes, onions, and olive oil.`,
    },
    {
      id: 9,
      title: "Börek",
      category: "Vegetarian",
      price: 33.99,
      img:
        "img/borek.jpg",
      desc: `Baked savory pastry made of flaky dough that is stuffed with spinach.`,
    },
    {
      id: 10,
      title: "Çiğ Köfte",
      category: "Vegetarian",
      price: 19.99,
      img:
        "img/cigkofte.jpg",
      desc: `Spicy vegetarian “meatball” made from bulgur, walnuts, and tomatoes.`,
    },
    {
      id: 11,
      title: "Döner Kebap",
      category: "Meats",
      price: 129.99,
      img:
        "img/doner.jpg",
      desc: `The meat consisting of grilled pieces of meat that are shredded from a vertical skewer. It's also seasoned with fresh herbs and spices.`,
    },
    {
      id: 12,
      title: "Adana Kebap",
      category: "Meats",
      price: 129.99,
      img:
        "img/adana.jpg",
      desc: `Adana kebab is made with ground lamb and tail fat that are kneaded together with garlic, onion, paprika, and hot red pepper flakes, giving it a deep red color and a spicy flavor.`,
    },
    {
      id: 13,
      title: "Sütlaç",
      category: "Desserts",
      price: 29.99,
      img:
        "img/sutlac.jpg",
      desc: `Oven-baked rice pudding is made with water, milk, sugar, rice, and rice flour. It is a simple, light dessert that is said to have origins in the Ottoman cuisine. `,
    },
    {
      id: 14,
      title: "Baklava",
      category: "Desserts",
      price: 69.99,
      img:
        "img/baklava.jpg",
      desc: `The remarkable baklava is a luscious dessert created with layers of thin phyllo dough intertwined with chopped nuts, all doused in a sweet, viscous syrup. `,
    },
  ];
  const section = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

const categories = menu.reduce(
  (values, item) => {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  },
  ["All"]
);

const categoryList = () => {
  const categoryBtns = categories
    .map((category) => {
      return `<button class="btn btn-outline-dark btn-item" data-id=${category}>${category}</button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".btn-item");

  //filter menu
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      console.log(category);
      const menuCategory = menu.filter((menuItem) => {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "All") {
        menuList(menu);
      } else {
        menuList(menuCategory);
      }
    });
  });
};

const menuList = (menuItems) => {
  let displayMenu = menuItems.map((item) => {
    return `<div class="menu-items col-lg-6 col-sm-12">
            <img
              src=${item.img}
              alt=${item.title}
              class="photo"
            />
            <div class="menu-info">
              <div class="menu-title">
                <h4>${item.title}</h4>
                <h4 class="price">₺${item.price}</h4>
              </div>
              <div class="menu-text">
                ${item.desc}
              </div>
            </div>
          </div>
    `;
  });
  displayMenu = displayMenu.join("");
  section.innerHTML = displayMenu;
};

menuList(menu);
categoryList();