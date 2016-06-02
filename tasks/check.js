var stegano = ["IT_WAS_EASY"]

function solve(cat, id, flag)
{
  var temp = []
  if (cat == "stegano") temp = stegano;
  else return false;

  if (temp[id] == flag) return true;
  else return false;
}
