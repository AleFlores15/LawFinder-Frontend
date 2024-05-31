const passwordDictionary = [
   
   "Password1!", "Welcome2@", "Secure3#", "Admin4$", "User5%", "Login6^", "Access7&", "Root8*", "Secret9(", "Test0)", 
   "Example10!", "Sample11@", "TryThis12#", "StrongPwd13$", "SafePass14%", "MyPass15^", "Check16&", "Lock17*", "Key18(", "Open19)", 
   "Admin_1234", "Password20!", "Welcome21@", "Secure22#", "Admin23$", "User24%", "Login25^", "Access26&", "Root27*", "Secret28(", 
   "Test29)", "Example30!", "Sample31@", "TryThis32#", "StrongPwd33$", "SafePass34%", "MyPass35^", "Check36&", "Lock37*", "Key38(", 
   "Open39)", "Admin_5678", "Password40!", "Welcome41@", "Secure42#", "Admin43$", "User44%", "Login45^", "Access46&", "Root47*", 
   "Secret48(", "Test49)", "Example50!", "Sample51@", "TryThis52#", "StrongPwd53$", "SafePass54%", "MyPass55^", "Check56&", "Lock57*", 
   "Key58(", "Open59)", "Admin_9012", "Password60!", "Welcome61@", "Secure62#", "Admin63$", "User64%", "Login65^", "Access66&", 
   "Root67*", "Secret68(", "Test69)", "Example70!", "Sample71@", "TryThis72#", "StrongPwd73$", "SafePass74%", "MyPass75^", "Check76&", 
   "Lock77*", "Key78(", "Open79)", "Admin_3456", "Password80!", "Welcome81@", "Secure82#", "Admin83$", "User84%", "Login85^", "Access86&", 
   "Root87*", "Secret88(", "Test89)", "Example90!", "Sample91@", "TryThis92#", "StrongPwd93$", "SafePass94%", "MyPass95^", "Check96&", 
   "Lock97*", "Key98(", "Open99)", "Admin_7890", "Password100!", "Welcome101@", "Secure102#", "Admin103$", "User104%", "Login105^", 
   "Access106&", "Root107*", "Secret108(", "Test109)", "Example110!", "Sample111@", "TryThis112#", "StrongPwd113$", "SafePass114%", 
   "MyPass115^", "Check116&", "Lock117*", "Key118(", "Open119)", "Admin_2345", "Password120!", "Welcome121@", "Secure122#", "Admin123$", 
   "User124%", "Login125^", "Access126&", "Root127*", "Secret128(", "Test129)", "Example130!", "Sample131@", "TryThis132#", "StrongPwd133$", 
   "SafePass134%", "MyPass135^", "Check136&", "Lock137*", "Key138(", "Open139)", "Admin_6789", "Password140!", "Welcome141@", "Secure142#", 
   "Admin143$", "User144%", "Login145^", "Access146&", "Root147*", "Secret148(", "Test149)", "Example150!", "Sample151@", "TryThis152#", 
   "StrongPwd153$", "SafePass154%", "MyPass155^", "Check156&", "Lock157*", "Key158(", "Open159)", "Admin_8901", "Password160!", "Welcome161@", 
   "Secure162#", "Admin163$", "User164%", "Login165^", "Access166&", "Root167*", "Secret168(", "Test169)", "Example170!", "Sample171@", 
   "TryThis172#", "StrongPwd173$", "SafePass174%", "MyPass175^", "Check176&", "Lock177*", "Key178(", "Open179)", "Admin_4567", "Password180!", 
   "Welcome181@", "Secure182#", "Admin183$", "User184%", "Login185^", "Access186&", "Root187*", "Secret188(", "Test189)", "Example190!", 
   "Sample191@", "TryThis192#", "StrongPwd193$", "SafePass194%", "MyPass195^", "Check196&", "Lock197*", "Key198(", "Open199)", "Admin_1235", 
   "Password200!", "Welcome201@", "Secure202#", "Admin203$", "User204%", "Login205^", "Access206&", "Root207*", "Secret208(", "Test209)", 
   "Example210!", "Sample211@", "TryThis212#", "StrongPwd213$", "SafePass214%", "MyPass215^", "Check216&", "Lock217*", "Key218(", "Open219)", 
   "Admin_5679", "Password220!", "Welcome221@", "Secure222#", "Admin223$", "User224%", "Login225^", "Access226&", "Root227*", "Secret228(", 
   "Test229)", "Example230!", "Sample231@", "TryThis232#", "StrongPwd233$", "SafePass234%", "MyPass235^", "Check236&", "Lock237*", "Key238(", 
   "Open239)", "Admin_9013", "Password240!", "Welcome241@", "Secure242#", "Admin243$", "User244%", "Login245^", "Access246&", "Root247*", 
   "Secret248(", "Test249)", "Example250!", "Sample251@", "TryThis252#", "StrongPwd253$", "SafePass254%", "MyPass255^", "Check256&", 
   "Lock257*", "Key258(", "Open259)", "Admin_3457", "Password260!", "Welcome261@", "Secure262#", "Admin263$", "User264%", "Login265^", 
   "Access266&", "Root267*", "Secret268(", "Test269)", "Example270!", "Sample271@", "TryThis272#", "StrongPwd273$", "SafePass274%", 
   "MyPass275^", "Check276&", "Lock277*", "Key278(", "Open279)", "Admin_7891", "Password280!", "Welcome281@", "Secure282#", "Admin283$", 
   "User284%", "Login285^", "Access286&", "Root287*", "Secret288(", "Test289)", "Example290!", "Sample291@", "TryThis292#", "StrongPwd293$", 
   "SafePass294%", "MyPass295^", "Check296&", "Lock297*", "Key298(", "Open299)", "Admin_8902", "Password300!", "Welcome301@", "Secure302#", 
   "Admin303$", "User304%", "Login305^", "Access306&", "Root307*", "Secret308(", "Test309)", "Example310!", "Sample311@", "TryThis312#", 
   "StrongPwd313$", "SafePass314%", "MyPass315^", "Check316&", "Lock317*", "Key318(", "Open319)", "Admin_2346", "Password320!", "Welcome321@", 
   "Secure322#", "Admin323$", "User324%", "Login325^", "Access326&", "Root327*", "Secret328(", "Test329)", "Example330!", "Sample331@", 
   "TryThis332#", "StrongPwd333$", "SafePass334%", "MyPass335^", "Check336&", "Lock337*", "Key338(", "Open339)", "Admin_6780", "Password340!", 
   "Welcome341@", "Secure342#", "Admin343$", "User344%", "Login345^", "Access346&", "Root347*", "Secret348(", "Test349)", "Example350!", 
   "Sample351@", "TryThis352#", "StrongPwd353$", "SafePass354%", "MyPass355^", "Check356&", "Lock357*", "Key358(", "Open359)", "Admin_8903", 
   "Password360!", "Welcome361@", "Secure362#", "Admin363$", "User364%", "Login365^", "Access366&", "Root367*", "Secret368(", "Test369)", 
   "Example370!", "Sample371@", "TryThis372#", "StrongPwd373$", "SafePass374%", "MyPass375^", "Check376&", "Lock377*", "Key378(", "Open379)", 
   "Admin_4568", "Password380!", "Welcome381@", "Secure382#", "Admin383$", "User384%", "Login385^", "Access386&", "Root387*", "Secret388(", 
   "Test389)", "Example390!", "Sample391@", "TryThis392#", "StrongPwd393$", "SafePass394%", "MyPass395^", "Check396&", "Lock397*", "Key398(", 
   "Open399)", "Admin_1236", "Password400!", "Welcome401@", "Secure402#", "Admin403$", "User404%", "Login405^", "Access406&", "Root407*", 
   "Secret408(", "Test409)", "Example410!", "Sample411@", "TryThis412#", "StrongPwd413$", "SafePass414%", "MyPass415^", "Check416&", 
   "Lock417*", "Key418(", "Open419)", "Admin_5670", "Password420!", "Welcome421@", "Secure422#", "Admin423$", "User424%", "Login425^", 
   "Access426&", "Root427*", "Secret428(", "Test429)", "Example430!", "Sample431@", "TryThis432#", "StrongPwd433$", "SafePass434%", 
   "MyPass435^", "Check436&", "Lock437*", "Key438(", "Open439)", "Admin_7892", "Password440!", "Welcome441@", "Secure442#", "Admin443$", 
   "User444%", "Login445^", "Access446&", "Root447*", "Secret448(", "Test449)", "Example450!", "Sample451@", "TryThis452#", "StrongPwd453$", 
   "SafePass454%", "MyPass455^", "Check456&", "Lock457*", "Key458(", "Open459)", "Admin_8904", "Password460!", "Welcome461@", "Secure462#", 
   "Admin463$", "User464%", "Login465^", "Access466&", "Root467*", "Secret468(", "Test469)", "Example470!", "Sample471@", "TryThis472#", 
   "StrongPwd473$", "SafePass474%", "MyPass475^", "Check476&", "Lock477*", "Key478(", "Open479)", "Admin_2347", "Password480!", "Welcome481@", 
   "Secure482#", "Admin483$", "User484%", "Login485^", "Access486&", "Root487*", "Secret488(", "Test489)", "Example490!", "Sample491@", 
   "TryThis492#", "StrongPwd493$", "SafePass494%", "MyPass495^", "Check496&", "Lock497*", "Key498(", "Open499)", "Admin_6781", "Password500!"
];


export const isPasswordInDictionary = (password) => {
   return passwordDictionary.includes(password);
}
export default isPasswordInDictionary;
