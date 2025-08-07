import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Car" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold text-foreground">3D ЭВА Коврики</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#catalog" className="text-foreground hover:text-primary transition-colors">Каталог</a>
            <a href="#production" className="text-foreground hover:text-primary transition-colors">Производство</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:block">Заказать звонок</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl font-bold text-foreground mb-6 leading-tight">
                Премиум 3D коврики
                <span className="text-primary block">из материала ЭВА</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 font-body">
                Инновационные автомобильные коврики с идеальной посадкой для каждой модели авто. 
                Водонепроницаемые, износостойкие, с антискользящим покрытием.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="hover:scale-105 transition-transform">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Перейти в каталог
                </Button>
                <Button variant="outline" size="lg" className="hover:scale-105 transition-transform">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть видео
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img
                src="/img/d3c1cc0f-8257-4fdd-8569-d5332a56f5e0.jpg"
                alt="3D ЭВА коврики в автомобиле"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-xl shadow-lg">
                <p className="font-bold">100% гарантия качества</p>
                <p className="text-sm opacity-90">Сертифицировано</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: 'Shield', title: 'Водонепроницаемые', description: '100% защита от влаги' },
              { icon: 'Zap', title: 'Быстрая установка', description: 'Идеальная посадка' },
              { icon: 'Award', title: 'Премиум качество', description: 'Только лучшие материалы' },
              { icon: 'Truck', title: 'Быстрая доставка', description: 'По всей России' }
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:scale-105 transition-transform animate-fade-in">
                <CardContent className="pt-6">
                  <Icon name={feature.icon} size={48} className="text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Каталог продукции</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Широкий ассортимент 3D ковриков ЭВА для различных моделей автомобилей
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Премиум серия', 
                price: 'от 8 990 ₽', 
                features: ['Трёхслойная структура', 'Антибактериальное покрытие', 'Пожизненная гарантия'],
                image: '/img/d3c1cc0f-8257-4fdd-8569-d5332a56f5e0.jpg'
              },
              { 
                title: 'Комфорт серия', 
                price: 'от 6 990 ₽', 
                features: ['Двухслойная структура', 'Водоотталкивающее покрытие', '3 года гарантии'],
                image: '/img/d3c1cc0f-8257-4fdd-8569-d5332a56f5e0.jpg'
              },
              { 
                title: 'Эконом серия', 
                price: 'от 4 990 ₽', 
                features: ['Однослойная структура', 'Базовая защита', '1 год гарантии'],
                image: '/img/d3c1cc0f-8257-4fdd-8569-d5332a56f5e0.jpg'
              }
            ].map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all animate-fade-in">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    {product.title}
                    <span className="text-primary">{product.price}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Icon name="Check" size={16} className="text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Выбрать модель авто</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* EVA Material Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Материал ЭВА — технология будущего
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Icon name="Droplets" size={32} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Водонепроницаемость</h3>
                    <p className="text-muted-foreground">
                      ЭВА (этиленвинилацетат) не впитывает воду и защищает салон от влаги, снега и грязи
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon name="Thermometer" size={32} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Температурная стойкость</h3>
                    <p className="text-muted-foreground">
                      Материал сохраняет свойства от -40°C до +80°C, не трескается на морозе
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon name="Shield" size={32} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Химическая стойкость</h3>
                    <p className="text-muted-foreground">
                      Устойчив к бензину, маслам, солям и химическим реагентам
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon name="Recycle" size={32} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Экологичность</h3>
                    <p className="text-muted-foreground">
                      Безопасный для здоровья материал, не выделяет токсичных веществ
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/cbd0534a-6786-401b-97df-5acaf734b05a.jpg"
                alt="Структура материала ЭВА"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur p-3 rounded-lg">
                <p className="font-semibold text-sm">Многослойная структура</p>
                <p className="text-xs text-muted-foreground">Толщина 15-20 мм</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Section */}
      <section id="production" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Процесс производства</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Современные технологии и строгий контроль качества на каждом этапе
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { step: '01', title: '3D сканирование', description: 'Точное измерение салона автомобиля' },
              { step: '02', title: 'Раскрой материала', description: 'Лазерная резка по шаблону' },
              { step: '03', title: 'Формовка', description: 'Термопрессование 3D формы' },
              { step: '04', title: 'Контроль качества', description: 'Проверка геометрии и свойств' }
            ].map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all animate-fade-in">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="relative">
            <img
              src="/img/a4af1122-8f71-488a-b4b6-7d42da0258f6.jpg"
              alt="Производственный цех"
              className="rounded-2xl shadow-2xl w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center">
              <Button size="lg" className="bg-white text-black hover:bg-white/90">
                <Icon name="Play" size={24} className="mr-2" />
                Виртуальный тур по производству
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Связаться с нами</h2>
            <p className="text-lg text-muted-foreground">
              Получите бесплатную консультацию по выбору ковриков
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Icon name="Phone" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Телефон</h3>
                  <p className="text-muted-foreground">+7 (800) 123-45-67</p>
                  <p className="text-sm text-muted-foreground">Бесплатно по России</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Icon name="Mail" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">info@3dkovriki.ru</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Icon name="MapPin" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Адрес</h3>
                  <p className="text-muted-foreground">г. Москва, ул. Производственная, д. 123</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Icon name="Clock" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Режим работы</h3>
                  <p className="text-muted-foreground">Пн-Пт: 9:00-18:00</p>
                  <p className="text-muted-foreground">Сб-Вс: 10:00-16:00</p>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Оставить заявку</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input placeholder="Ваше имя" />
                    <Input placeholder="Телефон" type="tel" />
                  </div>
                  <Input placeholder="Email" type="email" />
                  <Input placeholder="Модель автомобиля" />
                  <Textarea placeholder="Дополнительные пожелания" rows={4} />
                  <Button className="w-full">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Car" size={28} className="text-primary" />
                <h3 className="text-xl font-bold">3D ЭВА Коврики</h3>
              </div>
              <p className="text-sm opacity-80">
                Премиальные автомобильные коврики из материала ЭВА с доставкой по всей России
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:text-primary transition-colors">Легковые авто</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Внедорожники</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Коммерческие авто</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Аксессуары</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:text-primary transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Гарантии</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-primary transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Icon name="Youtube" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-60">
            <p>&copy; 2024 3D ЭВА Коврики. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;