export default function getBrand(cc: string): string {
  let amex = new RegExp("^3[47]");
  let visa = new RegExp("^4");
  let cup1 = new RegExp("^62");
  let cup2 = new RegExp("^81");

  let mastercard = new RegExp("^5[1-5]");
  let mastercard2 = new RegExp("^2[2-7]");

  let disco1 = new RegExp("^6011");
  let disco2 = new RegExp("^62[24568]");
  let disco3 = new RegExp("^6[45]");

  let diners = new RegExp("^3[0689]");
  let jcb = new RegExp("^35");
  let elo = new RegExp(
    "^(40117[8-9]|431274|438935|451416|457393|45763[1-2]|506(699|7[0-6][0-9]|77[0-8])|509d{3}|504175|627780|636297|636368|65003[1-3]|6500(3[5-9]|4[0-9]|5[0-1])|6504(0[5-9]|[1-3][0-9])|650(4[8-9][0-9]|5[0-2][0-9]|53[0-8])|6505(4[1-9]|[5-8][0-9]|9[0-8])|6507(0[0-9]|1[0-8])|65072[0-7]|6509(0[1-9]|1[0-9]|20)|6516(5[2-9]|[6-7][0-9])|6550([0-1][0-9]|2[1-9]|[3-4][0-9]|5[0-8]))",
  );

  if (amex.test(cc)) {
    return "AMEX";
  }
  if (mastercard.test(cc) || mastercard2.test(cc)) {
    return "MASTERCARD";
  }
  if (disco1.test(cc) || disco2.test(cc) || disco3.test(cc)) {
    return "DISCOVER";
  }
  if (diners.test(cc)) {
    return "DINERS";
  }
  if (jcb.test(cc)) {
    return "JCB";
  }
  if (cup1.test(cc) || cup2.test(cc)) {
    return "CHINA_UNION_PAY";
  }
  if (elo.test(cc)) {
    return "ELO";
  }
  if (visa.test(cc)) {
    return "VISA";
  }
  return "DEFAULT";
}
