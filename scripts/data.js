const bankData = [
  {
    code: 340,
    bank: "BACS Banco de Credito y Securitizacion S.A.",
    cuit: 30707227415,
  },
  {
    code: 017,
    bank: "	Banco BBVA Argentina S.A.",
    cuit: 30500003193,
  },
  {
    code: 426,
    bank: "Banco BICA S.A.",
    cuit: 30712331239,
  },
  {
    code: 336,
    bank: "Banco Bradesco Argentina S.A.U.",
    cuit: 30701255557,
  },
  {
    code: 331,
    bank: "Banco Cetelem Argentina S.A.",
    cuit: 30697306362,
  },
  {
    code: 319,
    bank: "Banco CMF S.A.",
    cuit: 30576614299,
  },
  {
    code: 431,
    bank: "Banco Coinag S.A.",
    cuit: 30714195960,
  },
  {
    code: 389,
    bank: "Banco Columbia S.A.",
    cuit: 30517637498,
  },
  {
    code: 299,
    bank: "Banco Comafi S.A.",
    cuit: 30604731018,
  },
  {
    code: 191,
    bank: "Banco Credicoop Cooperativo Limitado",
    cuit: 30571421352,
  },
  {
    code: 432,
    bank: "Banco de Comercio S.A.",
    cuit: 30542033637,
  },
  {
    code: 094,
    bank: "Banco de Corrientes S.A.",
    cuit: 30500010602,
  },
  {
    code: 315,
    bank: "Banco de Formosa S.A.",
    cuit: 30671375900,
  },
  {
    code: 007,
    bank: "Banco de Galicia y Buenos Aires S.A.U.",
    cuit: 30500001735,
  },
  {
    code: 300,
    bank: "Banco de Inversion y Comercio Exterior S.A.",
    cuit: 30651129083,
  },
  {
    code: 029,
    bank: "Banco de la Ciudad de Buenos Aires",
    cuit: 30999032083,
  },
  {
    code: 011,
    bank: "Banco de la Nacion Argentina",
    cuit: 30500010912,
  },
  {
    code: 093,
    bank: "Banco de La Pampa Sociedad de Economia Mixta",
    cuit: 30500012516,
  },
  {
    code: 014,
    bank: "Banco de la Provincia de Buenos Aires",
    cuit: 33999242109,
  },
  {
    code: 020,
    bank: "Banco de la Provincia de Cordoba S.A.",
    cuit: 30999228565,
  },
  {
    code: 269,
    bank: "Banco de la Republica Oriental del Uruguay",
    cuit: 30588337843,
  },
  {
    code: 045,
    bank: "Banco de San Juan S.A.",
    cuit: 30500009442,
  },
  {
    code: 086,
    bank: "Banco de Santa Cruz S.A.",
    cuit: 30500098801,
  },
  {
    code: 321,
    bank: "Banco de Santiago del Estero S.A.",
    cuit: 33686664649,
  },
  {
    code: 332,
    bank: "Banco de Servicios Financieros S.A.",
    cuit: 30697265895,
  },
  {
    code: 338,
    bank: "Banco de Servicios y Transacciones S.A.",
    cuit: 30704960995,
  },
  {
    code: 198,
    bank: "Banco de Valores S.A.",
    cuit: 30576124275,
  },
  {
    code: 083,
    bank: "Banco del Chubut S.A.",
    cuit: 30500012990,
  },
  {
    code: 310,
    bank: "Banco del Sol S.A.",
    cuit: 30677937560,
  },
  {
    code: 448,
    bank: "Banco Dino S.A.",
    cuit: 30712592407,
  },
  {
    code: 044,
    bank: "Banco Hipotecario S.A.",
    cuit: 30500011072,
  },
  {
    code: 322,
    bank: "Banco Industrial S.A.",
    cuit: 30685029959,
  },
  {
    code: 147,
    bank: "Banco Interfinanzas S.A.",
    cuit: 30522714417,
  },
  {
    code: 259,
    bank: "Banco Itau Argentina S.A.",
    cuit: 30580189411,
  },
  {
    code: 305,
    bank: "Banco Julio S.A.",
    cuit: 30657441216,
  },
  {
    code: 285,
    bank: "Banco Macro S.A.",
    cuit: 30500010084,
  },
  {
    code: 254,
    bank: "Banco Mariva S.A.",
    cuit: 30516420444,
  },
  {
    code: 341,
    bank: "Banco Masventas S.A.",
    cuit: 30540618263,
  },
  {
    code: 281,
    bank: "Banco Meridian S.A.",
    cuit: 30534487491,
  },
  {
    code: 065,
    bank: "Banco Municipal de Rosario",
    cuit: 33999181819,
  },
  {
    code: 034,
    bank: "Banco Patagonia S.A.",
    cuit: 30500006613,
  },
  {
    code: 301,
    bank: "Banco Piano S.A.",
    cuit: 30569151763,
  },
  {
    code: 268,
    bank: "Banco Provincia de Tierra del Fuego",
    cuit: 30575655781,
  },
  {
    code: 097,
    bank: "Banco Provincia del Neuquen S.A.",
    cuit: 30500014047,
  },
  {
    code: 309,
    bank: "Banco Rioja Sociedad Anonima Unipersonal",
    cuit: 30671859339,
  },
  {
    code: 247,
    bank: "Banco Roela S.A.",
    cuit: 30535610440,
  },
  {
    code: 277,
    bank: "Banco Saenz S.A.",
    cuit: 30534672434,
  },
  {
    code: 072,
    bank: "Banco Santander Rio S.A.",
    cuit: 30500008454,
  },
  {
    code: 435,
    bank: "Banco Sucredito Regional S.A.U.",
    cuit: 30716090333,
  },
  {
    code: 027,
    bank: "Banco Supervielle S.A.",
    cuit: 33500005179,
  },
  {
    code: 312,
    bank: "Banco Voii S.A.",
    cuit: 30546741636,
  },
  {
    code: 165,
    bank: "Bank of America, National Association",
    cuit: 30500050558,
  },
  {
    code: 515,
    bank: "Bank of China Limited, Sucursal Buenos Aires",
    cuit: 30716395452,
  },
  {
    code: 266,
    bank: "BNP Paribas",
    cuit: 30584727566,
  },
  {
    code: 143,
    bank: "Brubank S.A.U.",
    cuit: 30715899716,
  },
  {
    code: 016,
    bank: "Citibank N.A.",
    cuit: 30500005625,
  },
  {
    code: 150,
    bank: "HSBC Bank Argentina S.A.",
    cuit: 33537186009,
  },
  {
    code: 015,
    bank: "Industrial and Commercial Bank of China (Argentina) S.A.",
    cuit: 30709447846,
  },
  {
    code: 165,
    bank: "JPMorgan Chase Bank, National Association (Sucursal Buenos Aires)",
    cuit: 30583137943,
  },
  {
    code: 386,
    bank: "Nuevo Banco de Entre Rios S.A.",
    cuit: 33707995519,
  },
  {
    code: 330,
    bank: "Nuevo Banco de Santa Fe S.A.",
    cuit: 30692432661,
  },
  {
    code: 311,
    bank: "Nuevo Banco del Chaco S.A.",
    cuit: 30670157799,
  },
  {
    code: 339,
    bank: "RCI Banque S.A.",
    cuit: 30707108343,
  },
  {
    code: 384,
    bank: "Wilobank S.A",
    cuit: 30715654632,
  },
];
