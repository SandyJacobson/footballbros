class TeamsController < ApplicationController
  before_action :set_team, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /teams
  def index
    @teams = Team.all

    render json: @teams
  end

  # GET /teams/1
  def show
    render json: @team, include: :players
  end

  # POST /teams
  def create
    @team = Team.new(team_params)
    @team.user = @current_user

    if @team.save
      render json: @team, status: :created, location: @team
    else
      render json: @team.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /teams/1
  def update
    if @team.update(team_params)
      print 'THEEEEERRREEEEEE'
      print @team      
      render json: @team
    else
      render json: @team.errors, status: :unprocessable_entity
    end
  end

  # DELETE /teams/1
  def destroy
    @team.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_team
      @team = Team.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def team_params
      params.require(:team).permit(:name, :manager, :img_url, :user_id)
    end
end
