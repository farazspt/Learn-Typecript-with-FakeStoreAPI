function formatToDollar(money: any): any {
  const moneyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  money = parseFloat(money);
  return moneyFormatter.format(money);
}

function starRatingComponent(rate: any) {
  rate = Math.round(rate);
  const blank = 5 - rate;
  let stars = '<div class="rate">';
  for (let i = 0; i < rate; i++) {
    stars += '<i class="fas fa-star filled"></i>';
  }
  for (let i = 0; i < blank; i++) {
    stars += '<i class="fas fa-star"></i>';
    stars += "</div>";
  }
}

function formattingDate(date: any) {
  date = new Date(date);
  return date.toLocaleString("id-ID", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export { formatToDollar, starRatingComponent, formattingDate };
