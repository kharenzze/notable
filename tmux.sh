tmux split-window -h
tmux send-keys 'git status' C-m
tmux select-pane -t 0
