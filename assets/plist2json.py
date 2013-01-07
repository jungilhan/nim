import json
from plistlib import readPlist
import StringIO
 
plist = open("winTable.plist","r").read()
 
in_file = StringIO.StringIO(plist)
plist_dict = readPlist(in_file)
 
open("winTable.json","w").write(json.dumps(plist_dict))
