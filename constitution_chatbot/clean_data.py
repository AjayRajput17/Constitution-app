import re

# Load file
with open("constitution-of-India.txt", "r", encoding="utf-8") as f:
    text = f.read()

# 1. Remove footnotes like:
#    "1. Subs. by ..." , "2. Ins. by ..." , "3. Omitted ..."
text = re.sub(r"\n?__+.*?\n", "", text)  # remove lines starting with underscores
text = re.sub(r"\n?\d+\.\s+(Subs\.|Ins\.|Omitted).*?(?=\n)", "", text)

# 2. Collapse multiple newlines
text = re.sub(r"\n{2,}", "\n", text)

# Save cleaned version
with open("constitution_cleaned.txt", "w", encoding="utf-8") as f:
    f.write(text)

print("✅ Cleaned file saved as constitution_cleaned.txt")
