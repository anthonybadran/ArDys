from flask import Flask, request, render_template, redirect, url_for, jsonify
import docx
# import arabic_reshaper
# from bidi.algorithm import get_display

app = Flask(__name__) #, static_url_path="/static", static_folder='C:/Users/antho/Desktop/dyslexia-pyapp/static')
app.config['MAX_CONTENT_LENGTH'] = 1024 * 1024 * 10


def divide_words(word1):
    word1 = word1.replace("‍","")
    if word1 =="الَّتي" or word1 =="الَّذي":
        return word1[0]+'`'+word1[1]+word1[2]+word1[3]+'/'+word1[4]+word1[5]
    elif word1 == "الَّتِي" or word1 =="الَّذِي":
        return word1[0] + '`' + word1[1] + word1[2] + word1[3] + '/' + word1[4] + word1[5]+word1[6]
    elif word1 =="الّتي" or word1 =="الّذي":
        return word1[0] + '`' + word1[1] + word1[2] + '/' + word1[3] + word1[4]
    elif word1 =="الّتِي" or word1 =="الّذِي":
        return word1[0] + '`' + word1[1] + word1[2] + '/' +word1[3]+ word1[4] + word1[5]
    else:
        try:
            ind = 0
            finished = ""
            slashed=""
            if word1[0] =="ا":
                if word1[3] =="ّ":
                    slashed = (word1[0]+word1[1] +"`")
                elif word1[4] =="ّ":
                    slashed = (word1[0] + word1[1] + "`")
                    chade = list(word1)
                    chade[4] = chade[3]
                    chade[3] = "ّ"
                    word1 = "".join(chade)
                else:
                    if word1[2]=="أ" or word1[2]=="إ":
                        if word1[5]=="ْ":
                            slashed =(word1[0]+'`'+word1[1]+'/'+word1[2]+word1[3]+word1[4]+word1[5]+'/')
                            ind = 5
                        else:
                            slashed =(word1[0] + '`'+word1[1] + word1[2] + '/')
                            ind = 3
                    else:
                        ind =2
                        slashed = (word1[0]+'`'+word1[1]+'/')
            if word1[0:2] =="بِ" or word1[0:2]=="كَ" or word1[0:2]== "وَ" or word1[0:2]=="فَ":
                if word1[2] == "ا" and word1[3]=="ل":
                    slashed =(word1[0:2]+'/')
                    finished = finished +slashed
                    if word1[5] == "ّ" or word1[6]=="ّ":
                        slashed =("|" + word1[2] + word1[3] + "|")
                        ind = 2
                    elif word1[4]=="ّ":
                        slashed = "|" + word1[2]+'|'
                        ind = 2
                    else:
                        if word1[4] == "أ" or word1[4] == "إ":
                            if word1[7] == "ْ":
                                slashed =("|" + word1[2] + '|'+word1[3] +'/'+word1[4] + word1[5] + word1[6] + word1[7] + '/')
                                ind = 7
                            else:
                                slashed =("|" + word1[2] + '|'+word1[3] + word1[4] + '/')
                                ind = 4
                        else:
                            if word1[4]=="ْ":
                                slashed =("|" + word1[2] + '|'+word1[3] +word1[4]+'/')
                            else:
                                slashed =("|" + word1[2] + '|'+word1[3] +'/')
                            ind = 4
            finished = finished + slashed
            for a in range(len(word1)):
                if ind > a or word1[a]=="‍":
                    continue
                if a+1 < (len(word1)):
                    try:
                        if (word1[a + 2] == "ا" or word1[a + 2] == "و" or word1[a + 2] == "ي") and (
                                word1[a + 1] == "َ" or word1[a + 1] == "ِ" or word1[a + 1] == "ُ") and word1[a] != "ّ":
                            try:
                                if (word1[a + 3] != "َ" and word1[a + 3] != "ِ" and word1[a + 3] != "ُ" and word1[
                                    a + 3] != "ّ" and word1[a + 3] != "ْ" and word1[a + 3] != "ا"):
                                    slashed = word1[a] + word1[a + 1] + word1[a + 2] + '/'
                                    finished = finished + slashed
                                    ind = a + 3
                                    continue
                            except:
                                slashed = word1[a] + word1[a + 1] + word1[a + 2] + '/'
                                finished = finished + slashed
                                ind = a + 3
                                continue
                        elif word1[a + 1] == "ّ" and (
                                word1[a + 2] == "َ" or word1[a + 2] == "ِ" or word1[a + 2] == "ُ") and (
                                word1[a + 3] == "ا" or word1[a + 3] == "و" or word1[a + 3] == "ي" or word1[
                            a + 3] == "ى") and word1[a] != "ّ":
                            try:
                                if word1[a + 4] != "َ" and word1[a + 4] != "ِ" and word1[a + 4] != "ُ" and word1[
                                    a + 4] != "ّ" and word1[a + 4] != "ْ" and word1[a + 4] != "ا":
                                    slashed = word1[a] + word1[a + 1] + word1[a + 2] + word1[a + 3] + '/'
                                    finished = finished + slashed
                                    ind = a + 4
                                    continue
                            except:
                                slashed = word1[a] + word1[a + 1] + word1[a + 2] + word1[a + 3] + '/'
                                finished = finished + slashed
                                ind = a + 4
                                continue
                    except:
                        pass
                    if word1[a + 1] == "ا" or word1[a + 1] == "و" or word1[a + 1] =="ي" or word1[a+1]=="ى":#aswat tawila
                        try:
                            if word1[a]=="ا" and (word1[a+1]=="و"or word1[a+1]=="ي") and (word1[a + 2] == "ِ" or word1[a + 2] == "َ" or word1[a + 2] == "ُ" or word1[a+2] == "ّ"):continue
                        except: pass
                        if word1[a] !="ِ" and word1[a] !="َ" and word1[a] != "ُ" and word1[a] != "ْ" and word1[a] !="ً" and word1[a]!="ّ":
                            if word1[a] == "و" and word1[a-1] != "ِ" and word1[a-1] != "َ" and word1[a-1] != "ُ" and word1[a-1] != "ْ" and word1[a+1] =="ا":
                                slashed = "^" + word1[a+1]
                                finished = finished + slashed
                                return finished.strip("/")
                            try:
                                if word1[len(word1)-1] == "ْ" and a+3 == len(word1)-1:
                                    slashed =(word1[a]+word1[a+1]+'/'+word1[a+2]+word1[a+3]+'/')
                                    finished = finished + slashed
                                    return finished.strip("/")
                            except:
                                return word1
                            else:
                                if word1[len(word1) - 1] == "ى" and word1[a+1]=="ى":
                                    slashed = word1[a] + '/' + word1[a + 1]
                                    finished = finished + slashed
                                else:
                                    slashed = (word1[a] + word1[a + 1]+"/")
                                    finished = finished + slashed
                    elif word1[a] != "ِ" and word1[a] != "َ" and word1[a] != "ُ" and word1[a] != "ْ" and word1[a] != "ّ":
                        if word1[a + 1] == "ِ" or word1[a + 1] == "َ" or word1[a + 1] == "ُ" or word1[a+1] == "ّ":
                            if word1[a+1] == "ّ":
                                try:
                                    if word1[a+4] == "ْ":
                                        slashed = (word1[a]+word1[a+1]+word1[a+2]+word1[a+3]+word1[a+4]+'/')
                                        finished = finished + slashed
                                    else:
                                        slashed = (word1[a] + word1[a + 1] + word1[a + 2] + '/')
                                        finished = finished + slashed
                                except:
                                    try:
                                        if word1[a+2] == "ً":
                                            slashed = (word1[a]+word1[a+1]+word1[a+2]+word1[a+3]+'/')
                                            finished = finished + slashed
                                        else:
                                            slashed =(word1[a]+word1[a+1]+word1[a+2]+'/')
                                            finished = finished + slashed
                                    except:
                                        return word1
                            else:
                                try:
                                    if word1[a+3] == "ْ":
                                        slashed = (word1[a]+word1[a+1]+word1[a+2]+word1[a+3]+'/')
                                        finished = finished + slashed
                                    else:
                                        slashed = (word1[a] + word1[a + 1] + '/')
                                        finished = finished + slashed
                                except:
                                    if word1[a + 1] == "َ" and word1[len(word1) - 1] == "ى":
                                        slashed = word1[a] + word1[a + 1] + '/' + word1[a + 2]
                                        finished = finished + slashed
                                    else:
                                        slashed = (word1[a]+word1[a+1]+'/')
                                        finished = finished + slashed
                        elif word1[a] == "آ":
                            slashed = (word1[a] + '/')
                            finished = finished + slashed
                        elif word1[a+1] == "ً" or word1[a+1] == "ٌ" or word1[a+1] == "ٍ":
                            if word1[a + 1] == "ً":
                                if word1[a] == "ة":
                                    slashed = (word1[a]+word1[a+1]+'/')
                                    finished = finished + slashed
                                else:
                                    try:
                                        slashed = (word1[a]+word1[a+1]+word1[a+2]+'/')
                                        finished = finished + slashed
                                    except:
                                        return word1
                            else:
                                slashed = (word1[a]+word1[a+1]+'/')
                                finished = finished + slashed
            if word1[len(word1) - 1] != "ِ" and word1[len(word1) - 1] != "َ" and word1[len(word1) - 1] != "ُ" and word1[
                len(word1) - 1] != "ْ" and word1[len(word1) - 1] != "ً" and word1[len(word1) - 1] != "ّ" and word1[
                len(word1) - 1] != "ا" and word1[len(word1) - 1] != "و" and word1[len(word1) - 1] != "ي" and word1[len(word1) - 1] != "ى" and word1[len(word1)-1]!="ٌ" and word1[len(word1)-1]!="ٍ":
                if word1[len(word1) - 1] != "،" and word1[len(word1) - 1] != ":" and word1[len(word1) - 1] != "!" and word1[len(word1) - 1] != "." and word1[len(word1)-1]!="ا" and word1[len(word1)-1]!="؟":
                    finished = finished.strip("/") + word1[len(word1) - 1]
                elif( word1[len(word1) - 1] == "،" or word1[len(word1) - 1] == ":" or word1[len(word1) - 1] == "!" or word1[len(word1)-1]=="؟" )and word1[len(word1)-2]!="ا":
                    if word1[len(word1) - 2] != "ِ" and word1[len(word1) - 2] != "َ" and word1[len(word1) - 2] != "ُ" and word1[
                        len(word1) - 2] != "ْ" and word1[len(word1) - 2] != "ً" and word1[len(word1) - 2] != "ّ" and word1[
                        len(word1) - 2] != "ا" and word1[len(word1) - 2] != "و" and word1[len(word1) - 2] != "ي" and word1[
                        len(word1) - 2] != "ى" and word1[len(word1) - 2] != "ٌ" and word1[len(word1) - 2] != "ٍ" and word1[len(word1)-2]!="!":
                        finished = finished.strip('/') + word1[len(word1)-2]
                    elif word1[len(word1)-1]=="؟" and word1[len(word1)-2]=="!":
                        if word1[len(word1) - 3] != "ِ" and word1[len(word1) - 3] != "َ" and word1[len(word1) - 3] != "ُ" and word1[len(word1) - 3] != "ْ" and word1[len(word1) - 3] != "ً" and word1[len(word1) - 3] != "ّ" and word1[len(word1) - 3] != "ا" and word1[len(word1) - 3] != "و" and word1[len(word1) - 3] != "ي" and word1[len(word1) - 3] != "ى" and word1[len(word1) - 3] != "ٌ" and word1[len(word1) - 3] != "ٍ":
                            finished =finished.strip('/')+word1[len(word1)-3]
                elif(word1[len(word1)-1]=='.'):
                    try:
                        q = 1
                        while word1[len(word1)-q]==".":
                            q+=1
                        if word1[len(word1) - q] != "ِ" and word1[len(word1) - q] != "َ" and word1[
                            len(word1) - q] != "ُ" and word1[
                            len(word1) - q] != "ْ" and word1[len(word1) - q] != "ً" and word1[len(word1) - q] != "ّ" and word1[len(word1) - q] != "ا" and word1[len(word1) - q] != "و" and word1[
                            len(word1) - q] != "ي" and word1[
                            len(word1) - q] != "ى" and word1[len(word1) - q] != "ٌ" and word1[len(word1) - q] != "ٍ":
                            finished = finished.strip('/') +word1[len(word1)-q]
                    except:pass
            if word1[len(word1) - 1] == "ى":
                finished = finished.strip("ى") + '^' + word1[len(word1) - 1]
            return finished.strip("/")
        except:
            return word1
def wrongvalue(slashed,word1):
    count =0
    nonpunct = 0
    xwj = 0
    for i in slashed:
        if i == "/" or i == "|" or i == "^" or i == "`":
            count += 1
    for t in word1:
        if t == "،" or t == ":" or t == "." or t == "!" or t ==  "؟":
            nonpunct +=1
        if t =="‍":
            xwj +=1
    if len(slashed)-count == len(word1)-nonpunct-xwj:
        if nonpunct == 0:
            return slashed
        else:
            while nonpunct!=0:
                slashed = slashed+word1[len(word1)-nonpunct]
                nonpunct-=1
            return slashed
    else :
        return word1


@app.route('/')
def home():
    return render_template('index.html')


# @app.route('/background_process')
# def background_process():
# 	try:s
# 		lang = request.args.get('text', 0, type=string)
# 		return jsonify(result=lang)
# 	except Exception as e:
# 		return str(e)


@app.route('/', methods=['POST', 'GET'])
def submit():
    if request.method == 'GET':
        return render_template('index.html')

    else:
        wholed = request.form['text']
        words = wholed.split()
        z = ""
        for word in words:
            y = divide_words(word)
            x = wrongvalue(y,word)
            z = z + x + " "
        z = z.strip()
        # reshaped_text = arabic_reshaper.reshape(z)
        # z1 = get_display(reshaped_text)
        return render_template('uploads.html', content = z)


@app.route('/upload', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        wd = request.files['doc_file']
        if wd:
            wd.save(wd.filename)
            fh = docx.Document(wd)
            wholed = ""
            for i in fh.paragraphs:
                wholed += i.text
            fn = open('dys2.txt', 'w+', encoding='UTF-8')
            fn.write(wholed)
            fn.close()
            fh = open('dys2.txt', 'r', encoding='UTF-8')
            z = ""
            for line in fh:
                line = line.strip()
                words = line.split()
                for word in words:
                    y = divide_words(word)
                    x = wrongvalue(y, word)
                    z = z + x + " "
            z = z.strip()
            return render_template('uploads.html', content = z)
        else:
            return redirect(url_for('home'))
    else:
        return redirect(url_for('home'))


if __name__ == '__main__':
    app.run(debug=True)
