var lettre=prompt("enter a word");

lettre=lettre.toLowerCase();
palyndrome(lettre);

 function  palyndrome (mot)
 {
    var word=[];
    var tab=[];
    var bool=true;
        for (var n=mot.length-1;n>=0;n--)
        {
           tab[mot.length-n-1]=mot[n]
            
        }
        for( var i=0; i<mot.length;i++)
        {
            word[i]=mot[i];

        }

    for (var i=0;i<mot.length;i++)
    {
        if(word[i]!=tab[i])
            {
            bool=false;
            }
    }
    if(bool==true)
    {
        document.write("the word is a  palyndrome");
    }
    else if(bool==false)
    {
        document.write(" the word isn't apalyndrome");
    }
    return bool;
 }

