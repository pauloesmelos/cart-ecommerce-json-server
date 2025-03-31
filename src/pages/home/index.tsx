
const Home = () => {
  const getDateFormat = (): string => { // Dia-Semana, Dia-Mês Mês
    const daysWeek = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado", "Domingo"];

    const date = new Date();
    const monthFormat = Intl.DateTimeFormat("pt-BR", {
      month: "long"
    }).format(date);
    const dayMonth = date.getDate();
    const dayWeek = date.getDay() - 1;

    return `${daysWeek[dayWeek]}, ${dayMonth} ${monthFormat.replace(monthFormat[0], monthFormat[0].toUpperCase())}`;
  }

  return (
    <main className="w-full">
      <div className="w-full max-w-[1600px] px-5 py-4 mx-auto">
        <div className="w-full">
          {/* day */}
          <div className="w-full text-center">
            <p className="text-sm text-neutral-500">{getDateFormat()}</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home;