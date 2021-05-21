const clubsNL = [
  { naam: 'av Lycurgus', clubCoords: [52.484729, 4.740428] },
  { naam: 'av Zaanland', clubCoords: [52.449422, 4.815776] },
  { naam: 'av DEM', clubCoords: [52.485855, 4.671944] },
  { naam: 'av Suomi', clubCoords: [52.441289, 4.637874] },
  { naam: 'Nea Volharding', clubCoords: [52.518673, 4.975025] },
  { naam: 'av Castricum', clubCoords: [52.561456, 4.643821] },
  { naam: 'av Atos', clubCoords: [52.402546, 4.926188] },
  { naam: 'av Edam', clubCoords: [52.511004, 5.059414] },
  { naam: 'av Monnickendam', clubCoords: [52.451149, 5.046763] },
  { naam: 'av Trias', clubCoords: [52.612583, 4.700703] },
  { naam: 'av Hylas', clubCoords: [52.648899, 4.735784] },
  { naam: 'av Hera', clubCoords: [52.679473, 4.843033] },
  { naam: 'av Nova', clubCoords: [52.731628, 4.746405] },
  { naam: 'Tas 82', clubCoords: [52.779649, 4.805018] },
  { naam: 'av Holandia', clubCoords: [52.650268, 5.04322] },
  { naam: 'AAC', clubCoords: [52.370378, 4.804471] },
  { naam: 'ARO 88', clubCoords: [52.680395, 4.907644] },
  { naam: 'av Wieringermeer', clubCoords: [52.847037, 5.024033] },
  { naam: 'av Texel', clubCoords: [53.048715, 4.799522] },
  { naam: 'Noordkop', clubCoords: [52.951814, 4.775313] },
  { naam: 'av Horror', clubCoords: [53.042381, 5.648418] },
  { naam: 'SAV', clubCoords: [52.692342, 5.213387] },
  { naam: 'KAV Holland', clubCoords: [52.409663, 4.633902] },
  { naam: 'av Haarlem', clubCoords: [52.408587, 4.633191] },
  { naam: 'Phanos', clubCoords: [52.343488, 4.854265] },
  { naam: 'av 1923', clubCoords: [52.346642, 4.952777] },
  { naam: 'av Feniks', clubCoords: [52.310378, 4.965702] },
  { naam: 'Almere 81', clubCoords: [52.391081, 5.243008] },
  { naam: 'av Startbaan', clubCoords: [52.286732, 4.858697] },
  { naam: 'av Aalsmeer', clubCoords: [52.268095, 4.76577] },
  { naam: 'AKU', clubCoords: [52.255444, 4.809622] },
  { naam: 'av Haarlemmermeer', clubCoords: [52.308993, 4.702624] },
  { naam: 'De Spartaan', clubCoords: [52.258765, 4.543087] },
  { naam: 'av Zuidwal', clubCoords: [52.291164, 5.269629] },
  { naam: 'ac Waterland', clubCoords: [52.432535, 4.903918] },
  { naam: 'av DOKEV', clubCoords: [52.855461, 4.815956] },
  { naam: 'av Clytoneus', clubCoords: [52.073232, 4.874455] },
  { naam: 'av Heerenveen', clubCoords: [52.949827, 5.926191] },
  { naam: 'av Rijnsoever', clubCoords: [52.212473, 4.432515] },
  { naam: 'av Impala', clubCoords: [53.093777, 6.0899] },
  { naam: 'AAC 61', clubCoords: [52.981368, 6.546811] },
  { naam: 'EAC Sperwers', clubCoords: [52.776954, 6.942821] },
  { naam: 'av NOP', clubCoords: [52.718113, 5.757648] },
  { naam: 'av Athleta', clubCoords: [53.088204, 5.827846] },
  { naam: 'Groningen Atletiek', clubCoords: [53.197891, 6.541119] },
  { naam: 'av Fivelstreek', clubCoords: [53.330316, 6.916857] },
  { naam: 'av Veendam', clubCoords: [53.088275, 6.864847] },
  { naam: 'av Lionitas', clubCoords: [53.188865, 5.775468] },
  { naam: 'av Aquilo', clubCoords: [53.151786, 7.04921] },
  { naam: 'av Fit', clubCoords: [52.105685, 5.24275] },
  { naam: 'sc Antilope', clubCoords: [52.05859, 4.649385] },
  { naam: 'av Gouda', clubCoords: [52.027168, 4.686538] },
  { naam: 'AAV 36', clubCoords: [52.130635, 4.674503] },
  { naam: 'av Zeewolde', clubCoords: [52.329549, 5.533386] },
  { naam: 'av Athlos', clubCoords: [52.326757, 5.641241] },
  { naam: 'av Tempo', clubCoords: [52.272277, 5.175558] },
  { naam: 'BAV', clubCoords: [52.219873, 5.295748] },
  { naam: 'GAC Hilversum', clubCoords: [52.213786, 5.190703] },
  { naam: 'Leiden Atletiek', clubCoords: [52.174253, 4.47846] },
  { naam: 'arv Ilion', clubCoords: [52.048371, 4.527643] },
  { naam: 'Hellas Utrecht', clubCoords: [52.121779, 5.083957] },
  { naam: 'U-Track', clubCoords: [52.080142, 5.15777] },
  { naam: 'av Phoenix', clubCoords: [52.078549, 5.156886] },
  { naam: 'av Atverni', clubCoords: [52.056801, 5.094829] },
  { naam: 'Spirit Lelystad', clubCoords: [52.525241, 5.504626] },
  { naam: 'av Statina', clubCoords: [51.94789, 5.245564] },
  { naam: 'VAV', clubCoords: [52.030434, 5.578069] },
  { naam: 'av Flevo Delta', clubCoords: [52.524996, 5.711802] },
  { naam: 'av Nijkerk', clubCoords: [52.223057, 5.496159] },
  { naam: 'av Altis', clubCoords: [52.175687, 5.380444] },
  { naam: 'av Triathlon', clubCoords: [52.175162, 5.377754] },
  { naam: 'av Sparta', clubCoords: [52.067613, 4.375662] },
  { naam: 'HAAG Atletiek', clubCoords: [52.077501, 4.243464] },
  { naam: 'av Waterweg', clubCoords: [51.942953, 4.223168] },
  { naam: 'AV 40', clubCoords: [52.028563, 4.368408] },
  { naam: 'av Olympus 70', clubCoords: [51.980162, 4.211164] },
  { naam: 'sc Reeuwijk', clubCoords: [52.051384, 4.723999] },
  { naam: 'av Fortuna', clubCoords: [51.922343, 4.335346] },
  { naam: 'CAV Energie', clubCoords: [51.860046, 4.54608] },
  { naam: 'PAC', clubCoords: [51.935587, 4.502398] },
  { naam: 'Rotterdam Atletiek', clubCoords: [51.925119, 4.456966] },
  { naam: 'Spark', clubCoords: [51.857214, 4.330936] },
  { naam: 'Voorne Atletiek', clubCoords: [51.890223, 4.18899] },
  { naam: 'Avantri', clubCoords: [51.949787, 4.85583] },
  { naam: 'ac Olympia', clubCoords: [51.537727, 4.280395] },
  { naam: 'Sprint', clubCoords: [51.563496, 4.757717] },
  { naam: 'av de Wielingen', clubCoords: [51.323116, 3.479605] },
  { naam: 'ARV Achilles', clubCoords: [51.578877, 4.642422] },
  { naam: 'av Scheldesport', clubCoords: [51.327463, 3.847613] },
  { naam: 'AV 56', clubCoords: [51.518789, 3.888897] },
  { naam: 'av AAA', clubCoords: [51.8566, 4.67919] },
  { naam: 'Typhoon', clubCoords: [51.840966, 4.938893] },
  { naam: 'av Parthenon', clubCoords: [51.804839, 4.698608] },
  { naam: 'Fortius', clubCoords: [51.805955, 4.696029] },
  { naam: 'av Passaat', clubCoords: [51.836466, 4.716307] },
  { naam: 'ADSV Dynamica', clubCoords: [51.47512, 3.588362] },
  { naam: 'av Flakkee', clubCoords: [51.765635, 4.190688] },
  { naam: 'RKHAV', clubCoords: [51.287874, 4.054801] },
  { naam: 'av Delta Sport', clubCoords: [51.655542, 3.923474] },
  { naam: 'Groene Ster', clubCoords: [51.652385, 4.595871] },
  { naam: 'av Rucphen 90', clubCoords: [51.541174, 4.572049] },
  { naam: 'AVO 83', clubCoords: [51.578504, 4.531811] },
  { naam: 'THOR', clubCoords: [51.511462, 4.482281] },
  { naam: 'Spado', clubCoords: [51.481229, 4.306533] },
  { naam: 'DJA', clubCoords: [51.480853, 4.667715] },
  { naam: 'ACW 66', clubCoords: [51.684798, 5.082179] },
  { naam: 'Atledo', clubCoords: [51.620956, 4.93362] },
  { naam: 'ATV Scorpio', clubCoords: [51.632871, 4.851246] },
  { naam: 'av Achil 87', clubCoords: [51.492599, 5.127542] },
  { naam: 'av Attila', clubCoords: [51.540398, 5.071306] },
  { naam: 'av Spiridon', clubCoords: [51.589483, 4.897217] },
  { naam: 'DAK', clubCoords: [51.692727, 5.143327] },
  { naam: 'Gloria Atletiek', clubCoords: [51.451248, 4.923644] },
  { naam: 'Taxandria Atletiek', clubCoords: [51.575174, 5.215654] },
  { naam: 'Generaal Michaelis', clubCoords: [51.502906, 5.380037] },
  { naam: 'av Oirschot', clubCoords: [51.495757, 5.32359] },
  { naam: 'av Reusel', clubCoords: [51.353243, 5.148515] },
  { naam: 'av Valkenswaard', clubCoords: [51.364016, 5.456839] },
  { naam: 'DES', clubCoords: [51.342258, 5.29693] },
  { naam: 'Eindhoven Atletiek', clubCoords: [51.452819, 5.493235] },
  { naam: 'esav Asterix', clubCoords: [51.454589, 5.493794] },
  { naam: 'GVAC', clubCoords: [51.404344, 5.381266] },
  { naam: 'av de Keien', clubCoords: [51.653573, 5.627198] },
  { naam: 'av Marvel', clubCoords: [51.598788, 5.336532] },
  { naam: 'av Oss 78', clubCoords: [51.778197, 5.525184] },
  { naam: 'GAC Gemert', clubCoords: [51.560171, 5.695914] },
  { naam: 'O.S.S VOLO', clubCoords: [51.696207, 5.274239] },
  { naam: 'Prins Hendrik', clubCoords: [51.665665, 5.27909] },
  { naam: 'AtH', clubCoords: [51.482286, 5.605441] },
  { naam: 'HAC Helmond', clubCoords: [51.483434, 5.603228] },
  { naam: 'Atletiek Helden', clubCoords: [51.318984, 5.982717] },
  { naam: 'Atletiek Leudal', clubCoords: [51.254136, 5.907778] },
  { naam: 'ATV Venray', clubCoords: [51.517954, 5.972111] },
  { naam: 'av Weert', clubCoords: [51.241136, 5.695379] },
  { naam: 't Jasper Sport', clubCoords: [51.376604, 5.735545] },
  { naam: 'Scopias', clubCoords: [51.350008, 6.159787] },
  { naam: 'Swift Atletiek', clubCoords: [51.194626, 6.017311] },
  { naam: 'Atletiek Maastricht', clubCoords: [50.835999, 5.679085] },
  { naam: 'Achilles Top', clubCoords: [50.860914, 6.038805] },
  { naam: 'av Caesar', clubCoords: [50.946872, 5.809267] },
  { naam: 'av Unitas', clubCoords: [50.990736, 5.840384] },
  { naam: 'AVON', clubCoords: [50.929444, 5.948324] },
  { naam: 'STB', clubCoords: [50.91774, 6.056862] },
  { naam: 'MSAV Uros', clubCoords: [50.836743, 5.677836] },
  { naam: 'av Astylos', clubCoords: [51.89545, 5.431453] },
  { naam: 'av Cifla', clubCoords: [51.811392, 5.862771] },
  { naam: 'Nijmegen Atletiek', clubCoords: [51.811213, 5.860355] },
  { naam: 'NSAV t Haasje', clubCoords: [51.812052, 5.858925] },
  { naam: 'av de Liemers', clubCoords: [51.937263, 6.056128] },
  { naam: 'av Pallas 67', clubCoords: [51.981065, 5.667707] },
  { naam: 'av Wijchen', clubCoords: [51.806957, 5.749367] },
  { naam: 'b.o.d de Sprinters', clubCoords: [51.89182, 5.91566] },
  { naam: 'Ciko 66', clubCoords: [52.005827, 5.92844] },
  { naam: 'Climax', clubCoords: [52.014394, 5.667662] },
  { naam: 'WAV Tarletos', clubCoords: [51.982709, 5.667247] },
  { naam: 'Atletico 73', clubCoords: [51.878429, 6.376911] },
  { naam: 'av Archeus', clubCoords: [51.97611, 6.745403] },
  { naam: 'av Argo', clubCoords: [51.979232, 6.303646] },
  { naam: 'av Davantria 1906', clubCoords: [52.277668, 6.157367] },
  { naam: 'av Gelre', clubCoords: [52.056976, 6.083621] },
  { naam: 'av Hanzesport', clubCoords: [52.153048, 6.207282] },
  { naam: 'AV 34', clubCoords: [52.199201, 5.920243] },
  { naam: 'AVA 70', clubCoords: [51.933671, 6.599018] },
  { naam: 'AAV Sisu', clubCoords: [52.369025, 6.656965] },
  { naam: 'ac TION', clubCoords: [52.194761, 6.867905] },
  { naam: 'ASV', clubCoords: [52.122021, 6.653458] },
  { naam: 'ACO van Elderen', clubCoords: [52.538891, 6.435843] },
  { naam: 'av Atletics Nijverdal', clubCoords: [52.37321, 6.469756] },
  { naam: 'av Goor 75', clubCoords: [52.236658, 6.597846] },
  { naam: 'av Haaksbergen', clubCoords: [52.14452, 6.728881] },
  { naam: 'av Holten', clubCoords: [52.290122, 6.438055] },
  { naam: 'av Iphitos', clubCoords: [52.27098, 7.018527] },
  { naam: 'av Rijssen', clubCoords: [52.293994, 6.52219] },
  { naam: 'av Spurt 88', clubCoords: [52.569591, 6.627243] },
  { naam: 'Marathon Pim Mulier', clubCoords: [52.25315, 6.808647] },
  { naam: 'de Gemzen', clubCoords: [52.40132, 6.041299] },
  { naam: 'av PEC 1910', clubCoords: [52.534664, 6.080116] },
  { naam: 'av Salland', clubCoords: [52.377425, 6.257589] },
  { naam: 'Cialfo', clubCoords: [52.359024, 5.977662] },
  { naam: 'Isala 96', clubCoords: [52.557507, 5.901624] },
  { naam: 'de Sprinter', clubCoords: [52.688847, 6.203355] },
  { naam: 'HAC 63', clubCoords: [52.722095, 6.493729] },
  { naam: 'av Spartacus', clubCoords: [53.191816, 5.550421] },
  { naam: 'Start 78', clubCoords: [52.788941, 6.143667] },
  { naam: 'ATC 75', clubCoords: [53.164165, 6.61751] },
  { naam: 'av Aquilo', clubCoords: [53.151752, 7.049181] },
  { naam: 'av Jahn II', clubCoords: [52.991372, 6.969432] },
  { naam: 'GSAV Vitalis', clubCoords: [53.196769, 6.53749] },
  { naam: 'sv Veendam', clubCoords: [53.088286, 6.86489] },
];

const clubsDE = [
  { naam: 'lg Papenburg-Aschendorf', clubCoords: [53.066795, 7.412244] },
  { naam: 'tv Vreden', clubCoords: [52.03813, 6.814312] },
];

const clubsBE = [
  { naam: 'KAAG Gent', clubCoords: [51.046554, 3.687968] },
  { naam: 'Racing Gent', clubCoords: [51.041495, 3.759153] },
  { naam: 'Olympic Brugge', clubCoords: [51.204402, 3.243628] },
  { naam: 'Stax Atletiek', clubCoords: [51.041287, 3.760781] },
  { naam: 'DALO Lommel', clubCoords: [51.241267, 5.306349] },
];