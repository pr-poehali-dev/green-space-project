import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      icon: "Database",
      title: "Цифровая инвентаризация",
      description: "Создание электронного реестра зеленых насаждений с GPS-координатами"
    },
    {
      icon: "Search",
      title: "Мониторинг состояния",
      description: "Регулярный осмотр и оценка здоровья деревьев и кустарников"
    },
    {
      icon: "BarChart3",
      title: "Аналитика и отчеты",
      description: "Статистические данные и прогнозирование развития насаждений"
    },
    {
      icon: "MapPin",
      title: "Картографирование",
      description: "Создание интерактивных карт с местоположением всех растений"
    }
  ];

  const inventoryData = [
    { id: "001", species: "Дуб черешчатый", diameter: "45 см", height: "18 м", condition: "Хорошее", location: "Парк Сокольники, сектор А-1" },
    { id: "002", species: "Липа мелколистная", diameter: "38 см", height: "15 м", condition: "Удовлетворительное", location: "Парк Сокольники, сектор А-2" },
    { id: "003", species: "Клен остролистный", diameter: "32 см", height: "12 м", condition: "Хорошее", location: "Парк Сокольники, сектор А-3" },
    { id: "004", species: "Береза повислая", diameter: "28 см", height: "16 м", condition: "Отличное", location: "Парк Сокольники, сектор Б-1" },
    { id: "005", species: "Сосна обыкновенная", diameter: "52 см", height: "22 м", condition: "Хорошее", location: "Парк Сокольники, сектор Б-2" },
    { id: "006", species: "Ель европейская", diameter: "41 см", height: "19 м", condition: "Требует лечения", location: "Парк Сокольники, сектор В-1" }
  ];

  const statistics = [
    { label: "Всего деревьев", value: "15,847", color: "text-green-500" },
    { label: "Здоровых", value: "12,341", color: "text-blue-500" },
    { label: "Требует внимания", value: "2,891", color: "text-yellow-500" },
    { label: "Критическое состояние", value: "615", color: "text-red-500" }
  ];

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case "Отличное": return "bg-green-600";
      case "Хорошее": return "bg-blue-600";
      case "Удовлетворительное": return "bg-yellow-600";
      case "Требует лечения": return "bg-red-600";
      default: return "bg-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="relative z-10 p-6 border-b border-gray-800">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <Icon name="Trees" className="text-green-500" size={32} />
            <span className="text-2xl font-bold">ГринИнвентарь</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#dashboard" className="hover:text-green-500 transition-colors">Панель</a>
            <a href="#inventory" className="hover:text-green-500 transition-colors">Инвентаризация</a>
            <a href="#monitoring" className="hover:text-green-500 transition-colors">Мониторинг</a>
            <a href="#reports" className="hover:text-green-500 transition-colors">Отчеты</a>
            <a href="#contacts" className="hover:text-green-500 transition-colors">Контакты</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url('/img/79b3cbfe-47a5-497d-bd6a-64116c45f5d6.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Цифровая <span className="text-green-500">Инвентаризация</span><br />
            Зеленых Насаждений
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Профессиональная система учета, мониторинга и управления<br />
            городскими и парковыми насаждениями
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
              Начать инвентаризацию
            </Button>
            <Button variant="outline" size="lg" className="border-green-500 text-green-500 hover:bg-green-500 hover:text-black px-8 py-4 text-lg">
              Демо-версия
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics Dashboard */}
      <section id="dashboard" className="py-16 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Статистика <span className="text-green-500">Насаждений</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {statistics.map((stat, index) => (
              <Card key={index} className="bg-gray-800 border-gray-600 text-center">
                <CardHeader className="pb-2">
                  <CardTitle className={`text-3xl font-bold ${stat.color}`}>
                    {stat.value}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-gray-800 border-gray-600">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Icon name="TrendingUp" className="mr-2 text-green-500" />
                  Здоровье насаждений
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Отличное состояние</span>
                    <span className="text-green-500">78%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Требует внимания</span>
                    <span className="text-yellow-500">18%</span>
                  </div>
                  <Progress value={18} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Критическое</span>
                    <span className="text-red-500">4%</span>
                  </div>
                  <Progress value={4} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-600">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Icon name="PieChart" className="mr-2 text-green-500" />
                  Распределение по видам
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Лиственные</span>
                  <Badge className="bg-blue-600">65%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Хвойные</span>
                  <Badge className="bg-green-600">28%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Кустарники</span>
                  <Badge className="bg-purple-600">7%</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Наши <span className="text-green-500">Возможности</span>
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

      {/* Inventory Management */}
      <section id="inventory" className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            База Данных <span className="text-green-500">Насаждений</span>
          </h2>

          <Tabs defaultValue="table" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-gray-800">
              <TabsTrigger value="table" className="text-white">Табличный вид</TabsTrigger>
              <TabsTrigger value="map" className="text-white">Карта</TabsTrigger>
            </TabsList>

            <TabsContent value="table">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <Input 
                  placeholder="Поиск по виду дерева..." 
                  className="bg-gray-800 border-gray-600 text-white"
                />
                <Select>
                  <SelectTrigger className="w-full md:w-48 bg-gray-800 border-gray-600">
                    <SelectValue placeholder="Состояние" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-600">
                    <SelectItem value="all">Все состояния</SelectItem>
                    <SelectItem value="excellent">Отличное</SelectItem>
                    <SelectItem value="good">Хорошее</SelectItem>
                    <SelectItem value="satisfactory">Удовлетворительное</SelectItem>
                    <SelectItem value="needs-treatment">Требует лечения</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="bg-green-600 hover:bg-green-700">
                  <Icon name="Plus" className="mr-2" size={16} />
                  Добавить дерево
                </Button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left p-4 text-gray-300">ID</th>
                      <th className="text-left p-4 text-gray-300">Вид</th>
                      <th className="text-left p-4 text-gray-300">Диаметр</th>
                      <th className="text-left p-4 text-gray-300">Высота</th>
                      <th className="text-left p-4 text-gray-300">Состояние</th>
                      <th className="text-left p-4 text-gray-300">Местоположение</th>
                      <th className="text-left p-4 text-gray-300">Действия</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inventoryData.map((item) => (
                      <tr key={item.id} className="border-b border-gray-800 hover:bg-gray-800">
                        <td className="p-4 text-green-500 font-mono">{item.id}</td>
                        <td className="p-4 text-white">{item.species}</td>
                        <td className="p-4 text-gray-300">{item.diameter}</td>
                        <td className="p-4 text-gray-300">{item.height}</td>
                        <td className="p-4">
                          <Badge className={getConditionColor(item.condition)}>
                            {item.condition}
                          </Badge>
                        </td>
                        <td className="p-4 text-gray-300">{item.location}</td>
                        <td className="p-4">
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline" className="border-gray-600">
                              <Icon name="Edit" size={14} />
                            </Button>
                            <Button size="sm" variant="outline" className="border-gray-600">
                              <Icon name="Eye" size={14} />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>

            <TabsContent value="map">
              <Card className="bg-gray-800 border-gray-600">
                <CardContent className="p-8 text-center">
                  <Icon name="Map" className="text-green-500 mx-auto mb-4" size={64} />
                  <h3 className="text-2xl font-bold text-white mb-4">Интерактивная карта</h3>
                  <p className="text-gray-300 mb-6">
                    Здесь будет отображена интерактивная карта с местоположением всех деревьев
                  </p>
                  <Button className="bg-green-600 hover:bg-green-700">
                    Загрузить карту
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
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
                  <span>+7 (495) 987-65-43</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" className="text-green-500" size={20} />
                  <span>info@greeninventory.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" className="text-green-500" size={20} />
                  <span>Москва, ул. Экологическая, 42</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" className="text-green-500" size={20} />
                  <span>Пн-Пт: 9:00-18:00</span>
                </div>
              </div>
            </div>
            <div>
              <Card className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Заказать инвентаризацию</CardTitle>
                  <CardDescription className="text-gray-300">
                    Оставьте заявку и мы проведем инвентаризацию ваших насаждений
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input 
                    placeholder="Название организации" 
                    className="bg-gray-800 border-gray-600 text-white"
                  />
                  <Input 
                    placeholder="Контактное лицо" 
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
                    placeholder="Описание территории для инвентаризации" 
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
            <span className="text-xl font-bold">ГринИнвентарь</span>
          </div>
          <p className="text-gray-400 mb-4">
            Цифровая инвентаризация и мониторинг зеленых насаждений
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 ГринИнвентарь. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;