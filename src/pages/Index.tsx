import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      icon: "Trees",
      title: "Ландшафтный дизайн",
      description: "Профессиональное планирование и создание уникальных ландшафтных композиций"
    },
    {
      icon: "Sprout",
      title: "Озеленение территорий",
      description: "Посадка деревьев, кустарников и создание газонных покрытий"
    },
    {
      icon: "Map",
      title: "Геодезические работы",
      description: "Топографическая съемка и планировка участков"
    },
    {
      icon: "Shovel",
      title: "Благоустройство",
      description: "Строительство дорожек, установка малых архитектурных форм"
    }
  ];

  const plants = [
    { name: "Сосна обыкновенная", type: "Хвойные", season: "Круглый год", price: "2 500 ₽" },
    { name: "Клен остролистный", type: "Лиственные", season: "Весна-Осень", price: "3 200 ₽" },
    { name: "Туя западная", type: "Хвойные", season: "Круглый год", price: "1 800 ₽" },
    { name: "Береза повислая", type: "Лиственные", season: "Весна-Осень", price: "2 800 ₽" },
    { name: "Можжевельник", type: "Хвойные", season: "Круглый год", price: "1 500 ₽" },
    { name: "Липа мелколистная", type: "Лиственные", season: "Весна-Лето", price: "3 500 ₽" }
  ];

  const portfolioItems = [
    {
      title: "Парк «Зеленые холмы»",
      description: "Комплексное благоустройство территории 15 га",
      image: "/img/f91e41e3-3a44-49ba-9de9-0da6add5e861.jpg"
    },
    {
      title: "Частный сад в Подмосковье",
      description: "Ландшафтный дизайн загородного участка",
      image: "/img/0f8e4bc0-fb2e-4056-b24d-78e473113caf.jpg"
    },
    {
      title: "Городская площадь",
      description: "Реконструкция центральной площади города",
      image: "/img/f91e41e3-3a44-49ba-9de9-0da6add5e861.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="relative z-10 p-6">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <Icon name="Trees" className="text-green-500" size={32} />
            <span className="text-2xl font-bold font-mono">ЗаДинСурдиа</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="hover:text-green-500 transition-colors">Услуги</a>
            <a href="#catalog" className="hover:text-green-500 transition-colors">Каталог</a>
            <a href="#portfolio" className="hover:text-green-500 transition-colors">Портфолио</a>
            <a href="#about" className="hover:text-green-500 transition-colors">О нас</a>
            <a href="#contacts" className="hover:text-green-500 transition-colors">Контакты</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/img/9686572f-06de-450d-8d87-14eb78fd522a.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            Ландшафтное<br />
            <span className="text-green-500">Искусство</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Профессиональное благоустройство и озеленение территорий<br />
            с геодезическим планированием
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
              Заказать проект
            </Button>
            <Button variant="outline" size="lg" className="border-green-500 text-green-500 hover:bg-green-500 hover:text-black px-8 py-4 text-lg">
              Посмотреть работы
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Наши <span className="text-green-500">Услуги</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-gray-900 border-gray-700 hover:border-green-500 transition-colors">
                <CardHeader className="text-center pb-4">
                  <Icon name={service.icon} className="text-green-500 mx-auto mb-4" size={48} />
                  <CardTitle className="text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Plant Catalog Section */}
      <section id="catalog" className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Каталог <span className="text-green-500">Растений</span>
          </h2>
          
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <Select>
              <SelectTrigger className="w-full md:w-48 bg-gray-800 border-gray-600">
                <SelectValue placeholder="Тип растения" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-600">
                <SelectItem value="all">Все типы</SelectItem>
                <SelectItem value="coniferous">Хвойные</SelectItem>
                <SelectItem value="deciduous">Лиственные</SelectItem>
              </SelectContent>
            </Select>
            
            <Select>
              <SelectTrigger className="w-full md:w-48 bg-gray-800 border-gray-600">
                <SelectValue placeholder="Сезон посадки" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-600">
                <SelectItem value="all">Любой сезон</SelectItem>
                <SelectItem value="spring">Весна</SelectItem>
                <SelectItem value="summer">Лето</SelectItem>
                <SelectItem value="autumn">Осень</SelectItem>
                <SelectItem value="year-round">Круглый год</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plants.map((plant, index) => (
              <Card key={index} className="bg-gray-800 border-gray-600 hover:border-green-500 transition-colors">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-white text-lg">{plant.name}</CardTitle>
                    <Badge variant="secondary" className="bg-green-600 text-white">
                      {plant.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-gray-300">
                      <Icon name="Calendar" className="inline mr-2" size={16} />
                      {plant.season}
                    </p>
                    <p className="text-green-500 font-semibold text-xl">{plant.price}</p>
                  </div>
                  <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                    Добавить в проект
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Наше <span className="text-green-500">Портфолио</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="bg-gray-900 border-gray-700 overflow-hidden hover:border-green-500 transition-colors">
                <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url('${item.image}')` }}></div>
                <CardHeader>
                  <CardTitle className="text-white">{item.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              О <span className="text-green-500">Компании</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              Мы — команда профессионалов с более чем 15-летним опытом в области ландшафтного дизайна 
              и благоустройства территорий. Наша специализация включает геодезические работы, 
              что позволяет создавать точные и долговечные проекты.
            </p>
            <p className="text-gray-300 text-lg mb-8">
              Каждый проект мы подходим индивидуально, учитывая особенности местности, 
              климатические условия и пожелания клиентов.
            </p>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-green-500 mb-2">250+</div>
                <div className="text-gray-300">Проектов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-500 mb-2">15</div>
                <div className="text-gray-300">Лет опыта</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-500 mb-2">50+</div>
                <div className="text-gray-300">Специалистов</div>
              </div>
            </div>
          </div>
          <div 
            className="h-96 bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url('/img/0f8e4bc0-fb2e-4056-b24d-78e473113caf.jpg')` }}
          ></div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-green-500">Контакты</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Свяжитесь с нами</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="text-green-500" size={20} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" className="text-green-500" size={20} />
                  <span>info@landscape.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" className="text-green-500" size={20} />
                  <span>Москва, ул. Ландшафтная, 15</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" className="text-green-500" size={20} />
                  <span>Пн-Пт: 9:00-18:00, Сб: 10:00-16:00</span>
                </div>
              </div>
            </div>
            <div>
              <Card className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Оставить заявку</CardTitle>
                  <CardDescription className="text-gray-300">
                    Мы свяжемся с вами в течение рабочего дня
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input 
                    placeholder="Ваше имя" 
                    className="bg-gray-800 border-gray-600 text-white"
                  />
                  <Input 
                    placeholder="Телефон" 
                    className="bg-gray-800 border-gray-600 text-white"
                  />
                  <Input 
                    placeholder="Email" 
                    className="bg-gray-800 border-gray-600 text-white"
                  />
                  <Textarea 
                    placeholder="Описание проекта" 
                    className="bg-gray-800 border-gray-600 text-white"
                    rows={4}
                  />
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Отправить заявку
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-6 border-t border-gray-700">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Trees" className="text-green-500" size={24} />
            <span className="text-xl font-bold">ЗаДинСурдиа</span>
          </div>
          <p className="text-gray-400 mb-4">
            Профессиональное благоустройство и озеленение территорий
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 ЗаДинСурдиа. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;