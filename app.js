const WA='5573982035208';
const SVC={
 teclado:{nome:'Aulas Particulares de Teclado / Piano',curto:'aulas particulares de Teclado/Piano',obj:'aulas particulares e individuais de música no instrumento Teclado e/ou Piano, utilizando o método Sustenido Music, abrangendo, conforme o nível do(a) aluno(a), teoria musical, leitura de cifras e partituras, técnica, harmonia, ritmo e repertório',inst:'teclado ou piano'},
 sax:{nome:'Aulas Particulares de Saxofone',curto:'aulas particulares de Saxofone',obj:'aulas particulares e individuais de música no instrumento Saxofone, abrangendo, conforme o nível do(a) aluno(a), teoria musical, leitura de partituras, respiração, embocadura, sonoridade, técnica, improvisação e repertório',inst:'saxofone, boquilha, palhetas e acessórios'},
 turma:{nome:'Aulas de Música em Turma',curto:'aulas de música em turma',obj:'aulas coletivas de música em turma, podendo envolver instrumento, canto, prática de conjunto, coral e/ou grupo vocal, teoria e percepção musical, conforme o programa definido pelo Contratado para a turma',inst:'instrumento e materiais individuais',turma:true}
};
let svc='teclado';const $=s=>document.querySelector(s);const form=$('#dados');
const val=k=>(form.elements[k]&&form.elements[k].value||'').trim();
const F=(k,fb)=>{const v=val(k);return `<span class="f">${esc(v||fb||'__________')}</span>`};
function esc(s){return s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]))}
function clauses(){
 const s=SVC[svc],menor=form.elements.menor.checked,img=form.elements.imagem.checked;
 const C=[];let n=0;const add=(t,ps)=>C.push({h:`CLÁUSULA ${++n}ª – ${t}`,p:ps});
 C.title=`CONTRATO DE PRESTAÇÃO DE SERVIÇOS – ${s.nome.toUpperCase()}`;
 C.intro=[`Pelo presente instrumento particular, de um lado <b>SÓSTENES SILVA</b>, brasileiro, casado, professor de música, músico profissional e produtor musical, inscrito no CPF sob o nº ___.___.___-__, residente e domiciliado em Ilhéus-BA, bairro Nelson Costa, WhatsApp (73) 98203-5208, doravante denominado <b>CONTRATADO</b>;`,
 `e, de outro lado, ${F('nome','[NOME DO CONTRATANTE]')}, inscrito(a) no CPF sob o nº ${F('cpf')}${val('rg')?', RG nº '+F('rg'):''}, residente e domiciliado(a) em ${F('end')}, telefone ${F('tel')}${val('email')?', e-mail '+F('email'):''}, doravante denominado(a) <b>CONTRATANTE</b>${menor?`, neste ato na qualidade de responsável legal pelo(a) aluno(a) menor de idade ${F('aluno')}, sendo o responsável legal ${F('respNome')}, CPF ${F('respCpf')}`:''};`,
 `têm entre si justo e contratado o presente Contrato de Prestação de Serviços, regido pelos artigos 593 a 609 do Código Civil (Lei 10.406/2002), pelo Código de Defesa do Consumidor (Lei 8.078/1990) no que couber, e pelas cláusulas a seguir.`];
 const al=menor?'o(a) aluno(a)':'o(a) CONTRATANTE';
 add('DO OBJETO',[`O presente contrato tem por objeto a prestação, pelo CONTRATADO, de ${s.obj}, em benefício de ${al}.`,`Parágrafo único. O CONTRATADO prestará os serviços com autonomia técnica e pedagógica, sem vínculo empregatício entre as partes.`]);
 add('DOS DIAS, HORÁRIOS E DURAÇÃO',[`As aulas ocorrerão ${F('dias')}, com duração de ${F('duracao')} cada, totalizando em média 4 (quatro) aulas por mês por dia semanal contratado.`,`Parágrafo único. Alterações de dia ou horário poderão ser feitas de comum acordo entre as partes, inclusive por mensagem de WhatsApp.`]);
 add('DO LOCAL',[`As aulas serão ministradas ${F('local')}.`,`Parágrafo único. Nas aulas online, cada parte é responsável por sua própria conexão de internet e equipamentos. Falhas de conexão do CONTRATANTE não geram direito a reposição.`]);
 add('DO VALOR E DO PAGAMENTO',[`Pelos serviços, o(a) CONTRATANTE pagará ao CONTRATADO o valor mensal de <b>R$ ${F('valor')}</b>, com vencimento todo dia ${F('venc')} de cada mês, por meio de ${F('pag','Pix')}.`,`§1º O valor mensal é fixo e não varia em razão do número de semanas do mês.`,`§2º O valor poderá ser reajustado uma vez a cada 12 (doze) meses, mediante aviso prévio de 30 (trinta) dias, em respeito ao direito à informação do consumidor (art. 6º, III, do CDC).`]);
 add('DO ATRASO NO PAGAMENTO',[`O atraso no pagamento implicará multa de 2% (dois por cento) sobre o valor da parcela e juros de mora de 1% (um por cento) ao mês, calculados proporcionalmente (art. 52, §1º, do CDC e art. 406 do Código Civil).`,`Parágrafo único. Após 30 (trinta) dias de atraso, o CONTRATADO poderá suspender as aulas até a regularização, sem prejuízo da cobrança dos valores devidos.`]);
 add('DAS FALTAS E REPOSIÇÕES',[`§1º O(A) CONTRATANTE deverá avisar a falta com antecedência mínima de 24 (vinte e quatro) horas, caso em que terá direito à reposição da aula em data e horário combinados com o CONTRATADO, dentro do mesmo mês ou do mês seguinte.`,`§2º A falta sem aviso prévio de 24 horas será considerada aula dada, sem direito a reposição ou desconto.`,`§3º As aulas canceladas pelo CONTRATADO serão sempre repostas, em data e horário combinados entre as partes.`,...(s.turma?[`§4º Nas aulas em turma, a falta individual do(a) aluno(a) não dá direito a reposição individual nem a desconto ou devolução de valores, pois a aula é ministrada normalmente para o grupo.`]:[])]);
 add('DOS FERIADOS E FÉRIAS',[`Não haverá aulas nos feriados nacionais, estaduais e municipais de Ilhéus-BA, sem desconto na mensalidade, salvo reposição acordada entre as partes.`,`Parágrafo único. O CONTRATADO poderá ter um período de recesso de até 15 (quinze) dias no fim de ano, comunicado com antecedência mínima de 30 (trinta) dias, sem cobrança proporcional ao período, ou com reposição das aulas, conforme acordado.`]);
 add('DO MATERIAL E DO INSTRUMENTO',[`O(A) CONTRATANTE é responsável por providenciar o próprio ${s.inst} para estudo, bem como o material didático indicado pelo CONTRATADO.`,`Parágrafo único. Danos causados por ${al} a instrumentos, equipamentos ou bens do CONTRATADO serão de responsabilidade do(a) CONTRATANTE (arts. 186 e 927 do Código Civil).`]);
 if(s.turma) add('DAS CONDIÇÕES ESPECÍFICAS DA TURMA',[`§1º A turma será formada com número mínimo de 4 (quatro) alunos. Caso esse número não seja atingido, o CONTRATADO poderá adiar o início ou propor outro formato, com devolução integral de valores pagos antecipadamente, se o(a) CONTRATANTE não aceitar.`,`§2º Os dias, horários e o programa da turma são definidos coletivamente pelo CONTRATADO e valem para todo o grupo, não podendo ser alterados individualmente.`,`§3º O(A) aluno(a) deverá respeitar os colegas, a pontualidade e as regras de convivência da turma.`]);
 add('DA AUTORIZAÇÃO DE USO DE IMAGEM',[img?`O(A) CONTRATANTE <b>AUTORIZA</b>, de forma gratuita, o uso da imagem e voz de ${al} em fotos e vídeos de aulas, recitais e apresentações, para divulgação do trabalho do CONTRATADO em redes sociais e materiais de divulgação, podendo revogar esta autorização a qualquer momento por escrito.`:`O(A) CONTRATANTE <b>NÃO AUTORIZA</b> o uso da imagem de ${al} para fins de divulgação. Qualquer uso futuro dependerá de autorização expressa e por escrito.`]);
 add('DA PROTEÇÃO DE DADOS (LGPD)',[`Os dados pessoais informados neste contrato serão tratados pelo CONTRATADO exclusivamente para a execução deste contrato, a comunicação entre as partes e o cumprimento de obrigações legais, nos termos da Lei 13.709/2018 (LGPD), art. 7º, V, não sendo compartilhados com terceiros.${menor?' Os dados do(a) menor serão tratados em seu melhor interesse, com o consentimento do responsável legal (art. 14 da LGPD).':''}`,`Parágrafo único. O(A) CONTRATANTE pode solicitar a qualquer tempo o acesso, a correção ou a exclusão de seus dados, respeitado o prazo legal de guarda.`]);
 add('DO PRAZO E DA RESCISÃO',[`Este contrato vigora por prazo indeterminado, a partir da data de sua assinatura.`,`§1º Qualquer das partes poderá rescindi-lo a qualquer tempo, sem multa, mediante aviso prévio de 30 (trinta) dias, por escrito ou por WhatsApp (art. 599 do Código Civil), sendo devidas as aulas desse período.`,`§2º O descumprimento de qualquer cláusula permite a rescisão imediata pela parte prejudicada.`]);
 add('DA ASSINATURA ELETRÔNICA',[`As partes reconhecem como válida a assinatura deste contrato por meio eletrônico, nos termos do art. 10, §2º, da MP 2.200-2/2001 e da Lei 14.063/2020, aceitando a assinatura feita na tela e o envio do documento em PDF por WhatsApp como prova de concordância. O aceite e a mensalidade paga também comprovam a contratação.`]);
 add('DO FORO',[`Fica eleito o foro da Comarca de Ilhéus-BA para dirimir quaisquer dúvidas oriundas deste contrato, ressalvado ao consumidor o direito de propor ação no foro de seu domicílio (art. 101, I, do CDC).`]);
 C.fecho=`E, por estarem de acordo, as partes assinam eletronicamente o presente contrato.`;
 return C;
}
function render(){const C=clauses();$('#svc-title').textContent=SVC[svc].nome;
 $('#contrato').innerHTML=`<h4>${C.title}</h4>`+C.intro.map(p=>`<p>${p}</p>`).join('')+C.map(c=>`<h5>${c.h}</h5>`+c.p.map(p=>`<p>${p}</p>`).join('')).join('')+`<p>${C.fecho}</p><p>Ilhéus-BA, ${new Date().toLocaleDateString('pt-BR')}.</p>`;
 form.classList.toggle('menor',form.elements.menor.checked);check();}
function missing(){const req=[...form.querySelectorAll('[required]')].filter(e=>!e.value.trim()).map(e=>e.closest('label').childNodes[0].textContent.replace('*',''));
 if(form.elements.menor.checked)['aluno','respNome','respCpf'].forEach(k=>{if(!val(k))req.push(form.elements[k].closest('label').childNodes[0].textContent)});return req}
function check(){const m=missing(),ok=$('#aceite').checked;$('#btn-continuar').disabled=!(ok&&!m.length);
 $('#faltando').textContent=m.length?'Preencha: '+m.join(', '):(!ok?'Marque “Li e concordo” para continuar.':'');}
form.addEventListener('input',render);form.addEventListener('change',render);$('#aceite').addEventListener('change',check);
document.querySelectorAll('.tab').forEach(b=>b.onclick=()=>{document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));b.classList.add('active');svc=b.dataset.svc;$('#aceite').checked=false;render();});
// assinatura
const pad=$('#pad'),ctx=pad.getContext('2d');let drawing=false,signed=false;
function sizePad(){const r=pad.getBoundingClientRect(),d=window.devicePixelRatio||1;pad.width=r.width*d;pad.height=r.height*d;ctx.scale(d,d);ctx.lineWidth=2.5;ctx.lineCap='round';ctx.strokeStyle='#0b1630';signed=false;}
const pos=e=>{const r=pad.getBoundingClientRect();return[e.clientX-r.left,e.clientY-r.top]};
pad.addEventListener('pointerdown',e=>{drawing=true;pad.setPointerCapture(e.pointerId);ctx.beginPath();ctx.moveTo(...pos(e));});
pad.addEventListener('pointermove',e=>{if(!drawing)return;ctx.lineTo(...pos(e));ctx.stroke();signed=true;});
['pointerup','pointercancel'].forEach(t=>pad.addEventListener(t,()=>drawing=false));
$('#btn-limpar').onclick=()=>{ctx.clearRect(0,0,pad.width,pad.height);signed=false;};
let clock;const now=()=>new Date().toLocaleString('pt-BR',{dateStyle:'short',timeStyle:'medium'});
$('#btn-continuar').onclick=()=>{$('#etapa-contrato').classList.add('hidden');$('#etapa-assinatura').classList.remove('hidden');document.querySelector('.tabs').classList.add('hidden');
 $('#resumo').innerHTML=`Contrato: <b>${SVC[svc].nome}</b><br>Contratante: <b>${esc(val('nome'))}</b> · CPF ${esc(val('cpf'))}`;sizePad();clock=setInterval(()=>$('#agora').textContent=now(),1000);$('#agora').textContent=now();scrollTo(0,$('#etapa-assinatura').offsetTop-10);};
$('#btn-voltar').onclick=()=>{$('#etapa-assinatura').classList.add('hidden');$('#etapa-contrato').classList.remove('hidden');document.querySelector('.tabs').classList.remove('hidden');clearInterval(clock);};
const strip=h=>{const d=document.createElement('div');d.innerHTML=h;return d.textContent};
function makePdf(ts){const {jsPDF}=window.jspdf;const doc=new jsPDF({unit:'mm',format:'a4',compress:true});const W=180,L=15;let y=18;
 const line=(t,o={})=>{doc.setFont('times',o.b?'bold':'normal');doc.setFontSize(o.s||11);const ls=doc.splitTextToSize(t,W);ls.forEach(l=>{if(y>282){doc.addPage();y=18}doc.text(l,o.c?105:L,y,o.c?{align:'center'}:undefined);y+=(o.s||11)*0.45});y+=1.5;};
 const C=clauses();line(C.title,{b:1,s:13,c:1});y+=2;C.intro.forEach(p=>line(strip(p)));C.forEach(c=>{y+=1;line(c.h,{b:1});c.p.forEach(p=>line(strip(p)))});line(C.fecho);line('Ilhéus-BA, '+ts+'.');
 if(y>230){doc.addPage();y=20}y+=4;doc.addImage(pad.toDataURL('image/png'),'PNG',L,y,80,80*pad.height/pad.width);y+=80*pad.height/pad.width+2;
 doc.line(L,y,L+90,y);y+=5;line(`CONTRATANTE: ${val('nome')} – CPF ${val('cpf')}`,{b:1});if(form.elements.menor.checked)line(`Responsável legal: ${val('respNome')} – CPF ${val('respCpf')} | Aluno(a): ${val('aluno')}`);
 line(`Assinado eletronicamente em ${ts} (horário do aparelho). Aceite: "Li e concordo com os termos".`,{s:9});y+=8;doc.line(L,y,L+90,y);y+=5;line('CONTRATADO: Sóstenes Silva – Sustenido Music',{b:1});
 return doc;}
$('#btn-assinar').onclick=async()=>{if(!signed){alert('Por favor, faça sua assinatura no quadro.');return}
 const ts=now();clearInterval(clock);const doc=makePdf(ts);const fname=`Contrato_${svc}_${val('nome').replace(/\s+/g,'_').normalize('NFD').replace(/[^\w]/g,'')}.pdf`;
 const blob=doc.output('blob');const url=URL.createObjectURL(blob);const a=$('#lnk-pdf');a.href=url;a.download=fname;a.click();
 const msg=`Olá Sóstenes, assinei o contrato de ${SVC[svc].curto}. Nome: ${val('nome')}, CPF: ${val('cpf')}, data/hora: ${ts}. Segue o PDF do contrato assinado.`;
 $('#lnk-wa').href=`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;$('#final').classList.remove('hidden');$('#btn-assinar').classList.add('hidden');window.__pdf={fname,size:blob.size,msg};
 const file=new File([blob],fname,{type:'application/pdf'});
 if(navigator.canShare&&navigator.canShare({files:[file]})){const b=$('#btn-share');b.classList.remove('hidden');b.onclick=()=>navigator.share({files:[file],text:msg}).catch(()=>{});}
 $('#final').scrollIntoView({behavior:'smooth'});};
render();
