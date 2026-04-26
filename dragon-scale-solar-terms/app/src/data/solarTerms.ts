export interface SolarTerm {
  id: number;
  name: string;
  pinyin: string;
  dateRange: string;
  month: string;
  season: 'spring' | 'summer' | 'autumn' | 'winter';
  seasonName: string;
  colors: { name: string; hex: string }[];
  poem: string;
  poet: string;
  dynasty: string;
  phenology: string;
  flower: string;
  description: string;
  bgGradient: string;
  // 新增：ChatGPT方案核心内容
  emotion: string;      // 情绪句 — 传播核心
  songFragment: string;  // 节气歌片段
}

export const solarTerms: SolarTerm[] = [
  {
    id: 1, name: '立春', pinyin: 'Lì Chūn', dateRange: '02.03 - 02.05', month: '正月', season: 'spring', seasonName: '春',
    colors: [{ name: '黄白游', hex: '#FFF799' }, { name: '松花', hex: '#FFEE6F' }, { name: '缃叶', hex: '#ECD452' }, { name: '苍黄', hex: '#B6A014' }],
    poem: '东风吹原野，地冻亦已消。早觉农事动，荷锄过相招。', poet: '赵孟頫', dynasty: '元',
    phenology: '东风解冻，蛰虫始振，鱼陟负冰', flower: '迎春花',
    description: '立春为二十四节气之首，标志着万物闭藏的冬季已过去，开始进入风和日暖、万物生长的春季。',
    bgGradient: 'from-[#FFF799]/30 via-[#FFEE6F]/20 to-[#B6A014]/10',
    emotion: '万物刚刚决定开始。', songFragment: '春',
  },
  {
    id: 2, name: '雨水', pinyin: 'Yǔ Shuǐ', dateRange: '02.18 - 02.20', month: '正月', season: 'spring', seasonName: '春',
    colors: [{ name: '盈盈', hex: '#F9D3E3' }, { name: '水红', hex: '#ECB0C1' }, { name: '苏梅', hex: '#DD7694' }, { name: '紫茎屏风', hex: '#A76283' }],
    poem: '好雨知时节，当春乃发生。随风潜入夜，润物细无声。', poet: '杜甫', dynasty: '唐',
    phenology: '獭祭鱼，鸿雁来，草木萌动', flower: '杏花',
    description: '雨水节气意味着降雨开始，雨量渐增，气温回升，冰雪融化，空气湿度增加。',
    bgGradient: 'from-[#F9D3E3]/30 via-[#ECB0C1]/20 to-[#A76283]/10',
    emotion: '世界开始变得柔软。', songFragment: '雨',
  },
  {
    id: 3, name: '惊蛰', pinyin: 'Jīng Zhé', dateRange: '03.05 - 03.07', month: '二月', season: 'spring', seasonName: '春',
    colors: [{ name: '桃夭', hex: '#F6BEC8' }, { name: '杨妃', hex: '#F091A0' }, { name: '长春', hex: '#DC6B82' }, { name: '牙绯', hex: '#C35C5D' }],
    poem: '微雨众卉新，一雷惊蛰始。田家几日闲，耕种从此起。', poet: '韦应物', dynasty: '唐',
    phenology: '桃始华，仓庚鸣，鹰化为鸠', flower: '桃花',
    description: '惊蛰时节，春雷始鸣，惊醒蛰伏于地下越冬的蛰虫，万物开始复苏。',
    bgGradient: 'from-[#F6BEC8]/30 via-[#F091A0]/20 to-[#C35C5D]/10',
    emotion: '一声雷，万物醒。', songFragment: '惊',
  },
  {
    id: 4, name: '春分', pinyin: 'Chūn Fēn', dateRange: '03.20 - 03.22', month: '二月', season: 'spring', seasonName: '春',
    colors: [{ name: '皦玉', hex: '#EBEEE8' }, { name: '韶粉', hex: '#E0E0D0' }, { name: '黄丹', hex: '#EA5514' }, { name: '青冥', hex: '#3271AE' }],
    poem: '仲春初四日，春色正中分。绿野徘徊月，晴天断续云。', poet: '徐铉', dynasty: '宋',
    phenology: '玄鸟至，雷乃发声，始电', flower: '海棠',
    description: '春分这一天昼夜平分，其后北半球昼渐长夜渐短，春意正浓。',
    bgGradient: 'from-[#EBEEE8]/30 via-[#E0E0D0]/20 to-[#3271AE]/10',
    emotion: '白天与黑夜，达成和解。', songFragment: '春',
  },
  {
    id: 5, name: '清明', pinyin: 'Qīng Míng', dateRange: '04.04 - 04.06', month: '三月', season: 'spring', seasonName: '春',
    colors: [{ name: '紫蒲', hex: '#A6559D' }, { name: '香炉紫烟', hex: '#D3CCD6' }, { name: '琅玕紫', hex: '#CB5C83' }, { name: '魏紫', hex: '#903754' }],
    poem: '清明时节雨纷纷，路上行人欲断魂。借问酒家何处有，牧童遥指杏花村。', poet: '杜牧', dynasty: '唐',
    phenology: '桐始华，田鼠化为鴽，虹始见', flower: '桐花',
    description: '清明既是节气又是节日，气清景明，万物皆显，正是踏青扫墓、缅怀先人之时。',
    bgGradient: 'from-[#A6559D]/30 via-[#D3CCD6]/20 to-[#903754]/10',
    emotion: '思念和春天，一起落下。', songFragment: '清',
  },
  {
    id: 6, name: '谷雨', pinyin: 'Gǔ Yǔ', dateRange: '04.19 - 04.21', month: '三月', season: 'spring', seasonName: '春',
    colors: [{ name: '苍葭', hex: '#A8BF8F' }, { name: '碧落', hex: '#AED0EE' }, { name: '挼蓝', hex: '#6E9BC5' }, { name: '翠虬', hex: '#446A37' }],
    poem: '惆怅阶前红牡丹，晚来唯有两枝残。明朝风起应吹尽，夜惜衰红把火看。', poet: '白居易', dynasty: '唐',
    phenology: '萍始生，鸣鸠拂其羽，戴胜降于桑', flower: '牡丹',
    description: '谷雨是春季最后一个节气，意味着寒潮天气基本结束，是播种移苗的最佳时节。',
    bgGradient: 'from-[#A8BF8F]/30 via-[#AED0EE]/20 to-[#446A37]/10',
    emotion: '这是春天最后的温柔。', songFragment: '谷',
  },
  {
    id: 7, name: '立夏', pinyin: 'Lì Xià', dateRange: '05.05 - 05.07', month: '四月', season: 'summer', seasonName: '夏',
    colors: [{ name: '青粲', hex: '#C3D94E' }, { name: '朱颜酡', hex: '#F29A76' }, { name: '地籁', hex: '#DFCEB4' }, { name: '溶溶月', hex: '#BEC2BC' }],
    poem: '赤帜插城扉，东君整驾归。泥新巢燕闹，花尽蜜蜂稀。', poet: '陆游', dynasty: '宋',
    phenology: '蝼蝈鸣，蚯蚓出，王瓜生', flower: '芍药',
    description: '立夏表示即将告别春天，是夏天的开始，万物至此皆长大。',
    bgGradient: 'from-[#C3D94E]/30 via-[#F29A76]/20 to-[#BEC2BC]/10',
    emotion: '万物开始用力生长。', songFragment: '夏',
  },
  {
    id: 8, name: '小满', pinyin: 'Xiǎo Mǎn', dateRange: '05.20 - 05.22', month: '四月', season: 'summer', seasonName: '夏',
    colors: [{ name: '嫩鹅黄', hex: '#F2C867' }, { name: '彤管', hex: '#E2A2AC' }, { name: '石发', hex: '#6A8D52' }, { name: '仙米', hex: '#D4C9AA' }],
    poem: '夜莺啼绿柳，皓月醒长空。最爱垄头麦，迎风笑落红。', poet: '欧阳修', dynasty: '宋',
    phenology: '苦菜秀，靡草死，麦秋至', flower: '玫瑰',
    description: '小满时，夏熟作物的籽粒开始灌浆饱满，但还未成熟，只是小满。',
    bgGradient: 'from-[#F2C867]/30 via-[#E2A2AC]/20 to-[#6A8D52]/10',
    emotion: '刚刚好，还没溢出来。', songFragment: '满',
  },
  {
    id: 9, name: '芒种', pinyin: 'Máng Zhòng', dateRange: '06.05 - 06.07', month: '五月', season: 'summer', seasonName: '夏',
    colors: [{ name: '筠雾', hex: '#D5D1AE' }, { name: '鸣珂', hex: '#B3B59C' }, { name: '如梦令', hex: '#DDBB99' }, { name: '曾青', hex: '#535164' }],
    poem: '水国芒种后，梅天风雨凉。露蚕开晚簇，江燕绕危樯。', poet: '窦常', dynasty: '唐',
    phenology: '螳螂生，鵙始鸣，反舌无声', flower: '荷花',
    description: '芒种是夏季的第三个节气，意味着仲夏时节正式开始，农忙最为繁忙的时节。',
    bgGradient: 'from-[#D5D1AE]/30 via-[#B3B59C]/20 to-[#535164]/10',
    emotion: '忙，是这个季节的名字。', songFragment: '芒',
  },
  {
    id: 10, name: '夏至', pinyin: 'Xià Zhì', dateRange: '06.21 - 06.22', month: '五月', season: 'summer', seasonName: '夏',
    colors: [{ name: '扶光', hex: '#F0C2A2' }, { name: '赩炽', hex: '#CB523E' }, { name: '月魄', hex: '#B2B6B6' }, { name: '山矾', hex: '#F5F3F2' }],
    poem: '毕竟西湖六月中，风光不与四时同。接天莲叶无穷碧，映日荷花别样红。', poet: '杨万里', dynasty: '宋',
    phenology: '鹿角解，蝉始鸣，半夏生', flower: '太阳花',
    description: '夏至是一年中白昼最长的一天，太阳直射北回归线，盛夏正式开始。',
    bgGradient: 'from-[#F0C2A2]/30 via-[#CB523E]/20 to-[#B2B6B6]/10',
    emotion: '光走到了最远的地方。', songFragment: '夏',
  },
  {
    id: 11, name: '小暑', pinyin: 'Xiǎo Shǔ', dateRange: '07.06 - 07.08', month: '六月', season: 'summer', seasonName: '夏',
    colors: [{ name: '骍刚', hex: '#F5B087' }, { name: '天球', hex: '#E0DFC6' }, { name: '赤灵', hex: '#954024' }, { name: '柔蓝', hex: '#106898' }],
    poem: '小暑不足畏，深居如退藏。青奴初荐枕，黄妳亦升堂。', poet: '庞铸', dynasty: '金',
    phenology: '温风至，蟋蟀居壁，鹰始挚', flower: '莲花',
    description: '小暑表示天气开始炎热，但还没到最热，全国大部分地区基本符合。',
    bgGradient: 'from-[#F5B087]/30 via-[#E0DFC6]/20 to-[#106898]/10',
    emotion: '热，刚刚开始。', songFragment: '暑',
  },
  {
    id: 12, name: '大暑', pinyin: 'Dà Shǔ', dateRange: '07.22 - 07.24', month: '六月', season: 'summer', seasonName: '夏',
    colors: [{ name: '夕岚', hex: '#E3ADB9' }, { name: '葱青', hex: '#EDF1BB' }, { name: '石蜜', hex: '#D4BF89' }, { name: '山岚', hex: '#BED2BB' }],
    poem: '细草摇头忽报侬，披襟拦得一西风。荷花入暮犹愁热，低面深藏碧伞中。', poet: '杨万里', dynasty: '宋',
    phenology: '腐草为萤，土润溽暑，大雨时行', flower: '菊花',
    description: '大暑是我国大部分地区一年中最热的时期，也是喜热作物生长速度最快的时期。',
    bgGradient: 'from-[#E3ADB9]/30 via-[#EDF1BB]/20 to-[#BED2BB]/10',
    emotion: '世界只剩下呼吸。', songFragment: '暑',
  },
  {
    id: 13, name: '立秋', pinyin: 'Lì Qiū', dateRange: '08.07 - 08.09', month: '七月', season: 'autumn', seasonName: '秋',
    colors: [{ name: '窃蓝', hex: '#88ABDA' }, { name: '白青', hex: '#98B6C2' }, { name: '缟羽', hex: '#EFEFEF' }, { name: '麹尘', hex: '#C0D09D' }],
    poem: '万事销身外，生涯在镜中。惟将两鬓雪，明日对秋风。', poet: '李益', dynasty: '唐',
    phenology: '凉风至，白露降，寒蝉鸣', flower: '秋菊',
    description: '立秋是秋季的第一个节气，标志着孟秋时节正式开始，暑去凉来。',
    bgGradient: 'from-[#88ABDA]/30 via-[#98B6C2]/20 to-[#C0D09D]/10',
    emotion: '风开始有形状。', songFragment: '秋',
  },
  {
    id: 14, name: '处暑', pinyin: 'Chǔ Shǔ', dateRange: '08.22 - 08.24', month: '七月', season: 'autumn', seasonName: '秋',
    colors: [{ name: '云门', hex: '#A2D2E2' }, { name: '退红', hex: '#F0CFE3' }, { name: '桑蕾', hex: '#EAD89A' }, { name: '秋香', hex: '#BF9C46' }],
    poem: '处暑无三日，新凉直万金。白头更世事，青草印禅心。', poet: '苏泂', dynasty: '宋',
    phenology: '鹰乃祭鸟，天地始肃，禾乃登', flower: '海棠',
    description: '处暑的"处"是终止的意思，处暑表示炎热的夏天正式结束。',
    bgGradient: 'from-[#A2D2E2]/30 via-[#F0CFE3]/20 to-[#BF9C46]/10',
    emotion: '热悄悄退场。', songFragment: '处',
  },
  {
    id: 15, name: '白露', pinyin: 'Bái Lù', dateRange: '09.07 - 09.09', month: '八月', season: 'autumn', seasonName: '秋',
    colors: [{ name: '凝脂', hex: '#F5F2E9' }, { name: '玉色', hex: '#EAE4D1' }, { name: '蕉月', hex: '#86908A' }, { name: '黄粱', hex: '#C4B798' }],
    poem: '露从今夜白，月是故乡明。有弟皆分散，无家问死生。', poet: '杜甫', dynasty: '唐',
    phenology: '鸿雁来，玄鸟归，群鸟养羞', flower: '桂花',
    description: '白露时节，天气转凉，清晨地面和植物上会有许多露珠，故名白露。',
    bgGradient: 'from-[#F5F2E9]/30 via-[#EAE4D1]/20 to-[#86908A]/10',
    emotion: '空气开始变得透明。', songFragment: '露',
  },
  {
    id: 16, name: '秋分', pinyin: 'Qiū Fēn', dateRange: '09.22 - 09.24', month: '八月', season: 'autumn', seasonName: '秋',
    colors: [{ name: '卵色', hex: '#D5E3D4' }, { name: '孔雀蓝', hex: '#4994C4' }, { name: '浅云', hex: '#EAEEF1' }, { name: '栾华', hex: '#C0AD5E' }],
    poem: '自古逢秋悲寂寥，我言秋日胜春朝。晴空一鹤排云上，便引诗情到碧霄。', poet: '刘禹锡', dynasty: '唐',
    phenology: '雷始收声，蛰虫坯户，水始涸', flower: '秋海棠',
    description: '秋分这一天昼夜再次平分，此后北半球昼短夜长，凉意渐浓。',
    bgGradient: 'from-[#D5E3D4]/30 via-[#4994C4]/20 to-[#C0AD5E]/10',
    emotion: '一半是收获，一半是告别。', songFragment: '秋',
  },
  {
    id: 17, name: '寒露', pinyin: 'Hán Lù', dateRange: '10.08 - 10.09', month: '九月', season: 'autumn', seasonName: '秋',
    colors: [{ name: '九斤黄', hex: '#DDB078' }, { name: '醽醁', hex: '#A6BAB1' }, { name: '东方既白', hex: '#8BA3C7' }, { name: '弗肯红', hex: '#ECD9C7' }],
    poem: '袅袅凉风动，凄凄寒露零。兰衰花始白，荷破叶犹青。', poet: '白居易', dynasty: '唐',
    phenology: '鸿雁来宾，雀入大水为蛤，菊有黄华', flower: '菊花',
    description: '寒露时节，气温比白露时更低，地面的露水更冷，快要凝结成霜。',
    bgGradient: 'from-[#DDB078]/30 via-[#A6BAB1]/20 to-[#8BA3C7]/10',
    emotion: '冷意开始落地。', songFragment: '寒',
  },
  {
    id: 18, name: '霜降', pinyin: 'Shuāng Jiàng', dateRange: '10.23 - 10.24', month: '九月', season: 'autumn', seasonName: '秋',
    colors: [{ name: '银朱', hex: '#D12920' }, { name: '甘石', hex: '#BDB2B2' }, { name: '十样锦', hex: '#F8C6B5' }, { name: '蜜合', hex: '#DFD7C2' }],
    poem: '远上寒山石径斜，白云深处有人家。停车坐爱枫林晚，霜叶红于二月花。', poet: '杜牧', dynasty: '唐',
    phenology: '豺乃祭兽，草木黄落，蛰虫咸俯', flower: '芙蓉',
    description: '霜降是秋季最后一个节气，意味着天气渐冷，初霜出现，冬天即将开始。',
    bgGradient: 'from-[#D12920]/30 via-[#BDB2B2]/20 to-[#DFD7C2]/10',
    emotion: '时间开始有重量。', songFragment: '霜',
  },
  {
    id: 19, name: '立冬', pinyin: 'Lì Dōng', dateRange: '11.07 - 11.08', month: '十月', season: 'winter', seasonName: '冬',
    colors: [{ name: '半见', hex: '#FFFBC7' }, { name: '繱犗', hex: '#88BFB8' }, { name: '黄琮', hex: '#9E8C6B' }, { name: '藕丝褐', hex: '#A88787' }],
    poem: '细雨生寒未有霜，庭前木叶半青黄。小春此去无多日，何处梅花一绽香。', poet: '仇远', dynasty: '宋',
    phenology: '水始冰，地始冻，雉入大水为蜃', flower: '梧桐花',
    description: '立冬是冬季的开始，意味着万物开始进入休养、收藏的状态。',
    bgGradient: 'from-[#FFFBC7]/30 via-[#88BFB8]/20 to-[#9E8C6B]/10',
    emotion: '世界慢慢收起声音。', songFragment: '冬',
  },
  {
    id: 20, name: '小雪', pinyin: 'Xiǎo Xuě', dateRange: '11.22 - 11.23', month: '十月', season: 'winter', seasonName: '冬',
    colors: [{ name: '龙膏烛', hex: '#DE82A7' }, { name: '小红', hex: '#E67762' }, { name: '月白', hex: '#D4E5EF' }, { name: '明茶褐', hex: '#9E8368' }],
    poem: '小雪已晴芦叶暗，长波乍急鹤声嘶。孤舟一夜宿流水，眼看山头月落溪。', poet: '陈羽', dynasty: '唐',
    phenology: '虹藏不见，天气上升，闭塞而成冬', flower: '梅花',
    description: '小雪时节，气温下降，开始降雪，但雪量不大，故称小雪。',
    bgGradient: 'from-[#DE82A7]/30 via-[#E67762]/20 to-[#D4E5EF]/10',
    emotion: '轻轻地，世界白了一点。', songFragment: '雪',
  },
  {
    id: 21, name: '大雪', pinyin: 'Dà Xuě', dateRange: '12.06 - 12.08', month: '冬月', season: 'winter', seasonName: '冬',
    colors: [{ name: '粉米', hex: '#EFC4CE' }, { name: '米汤娇', hex: '#EEEAD9' }, { name: '雀梅', hex: '#788A6F' }, { name: '暮山紫', hex: '#A4ABD6' }],
    poem: '千山鸟飞绝，万径人踪灭。孤舟蓑笠翁，独钓寒江雪。', poet: '柳宗元', dynasty: '唐',
    phenology: '鹖鴠不鸣，虎始交，荔挺出', flower: '兰花',
    description: '大雪标志着仲冬时节正式开始，天气更冷，降雪的可能性比小雪时更大。',
    bgGradient: 'from-[#EFC4CE]/30 via-[#EEEAD9]/20 to-[#A4ABD6]/10',
    emotion: '一切被覆盖，也被保护。', songFragment: '雪',
  },
  {
    id: 22, name: '冬至', pinyin: 'Dōng Zhì', dateRange: '12.21 - 12.23', month: '冬月', season: 'winter', seasonName: '冬',
    colors: [{ name: '莺儿', hex: '#EBE1A9' }, { name: '银红', hex: '#E7CAD3' }, { name: '咸池', hex: '#DAA9A9' }, { name: '濯绛', hex: '#796860' }],
    poem: '天时人事日相催，冬至阳生春又来。刺绣五纹添弱线，吹葭六琯动浮灰。', poet: '杜甫', dynasty: '唐',
    phenology: '蚯蚓结，麋角解，水泉动', flower: '腊梅',
    description: '冬至是北半球白昼最短的一天，也是阴阳转化的关键节气，所谓"冬至一阳生"。',
    bgGradient: 'from-[#EBE1A9]/30 via-[#E7CAD3]/20 to-[#796860]/10',
    emotion: '黑夜走到尽头。', songFragment: '冬',
  },
  {
    id: 23, name: '小寒', pinyin: 'Xiǎo Hán', dateRange: '01.05 - 01.07', month: '腊月', season: 'winter', seasonName: '冬',
    colors: [{ name: '丁香褐', hex: '#BD9683' }, { name: '秋蓝', hex: '#7D929F' }, { name: '酂白', hex: '#F6F9E4' }, { name: '井天', hex: '#A4C9CC' }],
    poem: '辛苦孤花破小寒，花心应似客心酸。更凭青女留连得，未作愁红怨绿看。', poet: '范成大', dynasty: '宋',
    phenology: '雁北乡，鹊始巢，雉始雊', flower: '水仙',
    description: '小寒标志着季冬时节正式开始，冷气积久而寒，但还未到达极点。',
    bgGradient: 'from-[#BD9683]/30 via-[#7D929F]/20 to-[#A4C9CC]/10',
    emotion: '冷到最清醒。', songFragment: '寒',
  },
  {
    id: 24, name: '大寒', pinyin: 'Dà Hán', dateRange: '01.20 - 01.21', month: '腊月', season: 'winter', seasonName: '冬',
    colors: [{ name: '紫府', hex: '#995D7F' }, { name: '骨缥', hex: '#EBE3C7' }, { name: '肉红', hex: '#DDC5B8' }, { name: '石英', hex: '#C8B6BB' }],
    poem: '北风利如剑，布絮不蔽身。唯烧蒿棘火，愁坐夜待晨。', poet: '白居易', dynasty: '唐',
    phenology: '鸡乳，征鸟厉疾，水泽腹坚', flower: '瑞香',
    description: '大寒是一年中最冷的节气，也是二十四节气中的最后一个，冬去春来，周而复始。',
    bgGradient: 'from-[#995D7F]/30 via-[#EBE3C7]/20 to-[#C8B6BB]/10',
    emotion: '一切归于安静，等待重启。', songFragment: '寒',
  },
];

export const seasonPoem = '春雨惊春清谷天，夏满芒夏暑相连。秋处露秋寒霜降，冬雪雪冬小大寒。';

export const monthPoem = [
  '一月小寒接大寒',
  '二月立春雨水连',
  '惊蛰春分在三月',
  '清明谷雨四月天',
  '五月立夏和小满',
  '六月芒种夏至连',
  '七月小暑和大暑',
  '立秋处暑八月间',
  '九月白露接秋分',
  '寒露霜降十月全',
  '立冬小雪十一月',
  '大雪冬至迎新年',
];

export const seasonImages: Record<string, string> = {
  spring: '/images/spring-hero.jpg',
  summer: '/images/summer-hero.jpg',
  autumn: '/images/autumn-hero.jpg',
  winter: '/images/winter-hero.jpg',
};
