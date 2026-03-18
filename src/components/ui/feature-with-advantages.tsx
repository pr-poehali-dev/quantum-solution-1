import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"

function Feature() {
  return (
    <div className="w-full py-20 lg:py-0">
      <div className="container mx-auto px-4">
        <div className="flex gap-4 py-20 flex-col items-start lg:py-0">
          <div>
            <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm">WhatsApp рассылки</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-open-sans-custom text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)]">
              Почему выбирают нас
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
              Массовые рассылки в WhatsApp — быстрый и прямой способ достучаться до вашей аудитории без лишних затрат.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-[1.05rem] h-[1.05rem] mt-2 text-white" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Мгновенный охват</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Ваше сообщение попадает напрямую в телефон клиента — открываемость до 90%.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-[1.05rem] h-[1.05rem] mt-2 text-white" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">3 видеоотчёта</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Вы видите весь процесс рассылки — прозрачность на каждом этапе.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-[1.05rem] h-[1.05rem] mt-2 text-white" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">3 активные сим-карты</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Работают одновременно — скорость и надёжность доставки.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-[1.05rem] h-[1.05rem] mt-2 text-white" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Доступная цена</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">1 рассылка — всего 1 900 ₽. Скидки от 10 рассылок по предоплате.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-[1.05rem] h-[1.05rem] mt-2 text-white" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Любой формат контента</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Текст, фото, ссылки — отправляем вашу рекламу в любом виде.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-[1.05rem] h-[1.05rem] mt-2 text-white" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Быстрый старт</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Запускаем рассылку в течение 24 часов после получения материалов.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Feature }