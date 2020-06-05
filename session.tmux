# START:new
tmux new-session -s react-template -n editor -d
# END:new
# START:cd
# END:cd
#tmux send-keys -t react-template 'cd ~/devproject' C-m
# START:vim
tmux send-keys -t react-template 'nvm use  v12.16.3 ; n src/index.js' C-m
# END:vim
# START:hsplit
#tmux split-window -v -t react-template
#tmux selectp -t 2
## END:hsplit
## START:layout
#tmux select-layout -t react-template main-horizontal
# END:layout
# START:keystopane
#tmux send-keys -t react-template:1.2 'cd ~/devproject' C-m
# END:keystopane
# START:newwindow
tmux new-window -n console -t react-template
tmux send-keys -t react-template 'nvm use  v12.16.3 ; yarn start' C-m
#tmux send-keys -t react-template:2 'cd ~/devproject' C-m
# END:newwindow
# START:selectwindow
tmux select-window -t react-template:1
# END:selectwidow
tmux attach -t react-template
